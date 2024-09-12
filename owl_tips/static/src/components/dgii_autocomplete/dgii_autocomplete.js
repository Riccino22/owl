/** @odoo-module **/

import { registry } from "@web/core/registry";
import { useChildRef } from "@web/core/utils/hooks";
import { useInputField } from "@web/views/fields/input_field_hook";
import { standardFieldProps } from "@web/views/fields/standard_field_props";
import { Component } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";
import { AutoComplete } from "@web/core/autocomplete/autocomplete";
import {
  PhoneField,
  phoneField,
  formPhoneField,
} from "@web/views/fields/phone/phone_field";

let target;



async function showText(http, value) {
  const data = await http.get(`http://127.0.0.1:5000/search/${value}`);
  console.log(data)
  return data
}


//'132744632'
export class DgiiAutocomplete extends Component {
  static props = { ...standardFieldProps };
  setup() {
    super.setup();
    this.rpc = useService("rpc");
    this.http = useService("http");
  }

  get getText() {
    let value = this.props.record.data[this.props.name];
    if (value != "") {
      //showText(this.http.get, value);
      //const data = await this.rpc("/owl_tips")
      console.log(this);
    }
    console.log("A");
    return true;
  }

  onSelect(option) {
    console.log(this.props.record.update);
    const enterpriseName = option.label.replace(/^\d+\s*-\s*/, "");
    let rnc = option.label.match(/^\d+/);
    rnc = rnc ? rnc[0] : "";
    this.props.record.update({ [this.props.name]: enterpriseName });
    this.props.record.update({ 'vat': rnc });
  }

  get sources() {
    console.log("JAJHS");
    const options = async (val) => {
      if (val.length > 1) {
        let data = await showText(this.http, val);
        //let enterprises = JSON.parse(data);
        let labels = [];
        data.forEach((dt) => {
          labels.push({ label: `${dt.rnc} - ${dt.name}` });
        });
        return labels;
      }
      else {
        return [];
      }
    };
    return [{ options }];
  }
}

DgiiAutocomplete.template = "owl_tips.DgiiAutocomplete";
DgiiAutocomplete.components = { AutoComplete };

export const DgiiAutocompleteProps = {
  component: DgiiAutocomplete,  
};

registry.category("fields").add("dgii_autocomplete", DgiiAutocompleteProps);
