/** @odoo-module **/

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { _t } from "@web/core/l10n/translation";
import { useInputField } from "@web/views/fields/input_field_hook";
import { standardFieldProps } from "@web/views/fields/standard_field_props";

export class MyWidget extends Component {
  static template = "owl2.MyWidget";
  static props = {
    ...standardFieldProps,
    placeholder: { type: String, optional: true },
  };

  setup() {
    // initialize the component here

    useInputField({
      getValue: () => this.props.record.data[this.props.name] || "",
    });
  }
}

export const myWidget = {
  component: MyWidget,
  displayName: _t("Widget"),
  supportedTypes: ["char"],
  extractProps: ({ attrs }) => ({
    placeholder: attrs.placeholder,
  }),
};

registry.category("fields").add("widget", myWidget);
