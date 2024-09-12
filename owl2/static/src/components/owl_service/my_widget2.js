/** @odoo-module **/

import { ListRenderer } from "@web/views/list/list_renderer";
import { registry } from "@web/core/registry";
import { Pager } from "@web/core/pager/pager";
import { KanbanRenderer } from "@web/views/kanban/kanban_renderer";
import {
  X2ManyField,
  x2ManyField,
} from "@web/views/fields/x2many/x2many_field";
import { ConfirmationDialog } from "@web/core/confirmation_dialog/confirmation_dialog";
import { useService } from "@web/core/utils/hooks";

export class O2MListRenderer extends ListRenderer {
  get hasSelectors() {
    if (this.props.activeActions.delete) {
      this.props.allowSelectors = true;
    }
    let list = this.props.list;
    list.selection = list.records.filter((rec) => rec.selected);
    list.selectDomain = (value) => {
      list.isDomainSelected = value;
      list.model.notify();
    };
    return this.props.allowSelectors && !this.env.isSmall;
  }
  toggleSelection() {
    const list = this.props.list;
    if (!this.canSelectRecord) {
      return;
    }
    if (list.selection.length === list.records.length) {
      list.records.forEach((record) => {
        record.toggleSelection(false);
        list.selectDomain(false);
      });
    } else {
      list.records.forEach((record) => {
        record.toggleSelection(true);
      });
    }
  }
  get selectAll() {
    const list = this.props.list;
    const nbDisplayedRecords = list.records.length;
    if (list.isDomainSelected) {
      return true;
    } else {
      return false;
    }
  }
}

export class O2mMultiDelete extends X2ManyField {
  setup() {
    super.setup();
    X2ManyField.components = {
      Pager,
      KanbanRenderer,
      ListRenderer: O2MListRenderer,
    };
    this.orm = useService("orm");
    this.dialog = useService("dialog");
  }
  get Selected() {
    return this.list.records.filter((rec) => rec.selected).length;
  }
  DltSelected() {
    let selectedRecords = this.list.records.filter((rec) => rec.selected);
    this.dialog.add(ConfirmationDialog, {
      body: "Are you sure you want to delete selected records?",
      confirm: () =>
        selectedRecords.forEach((rec) => {
          if (this.activeActions.onDelete) {
            selectedRecords.forEach((rec) => {
              this.activeActions.onDelete(rec);
            });
          }
        }),
      cancel: () => {},
    });
  }
}

export const O2manyMultiDelete = {
  ...x2ManyField,
  component: O2mMultiDelete,
};
O2mMultiDelete.template = "O2mMultiDelete";
registry.category("fields").add("one2many_delete", O2manyMultiDelete);
