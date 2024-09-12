/** @odoo-module **/

import { registry } from "@web/core/registry";
import { useChildRef } from "@web/core/utils/hooks";
import { useInputField } from "@web/views/fields/input_field_hook";

import { standardFieldProps } from "@web/views/fields/standard_field_props";
import { Component } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";
import { AutoComplete } from "@web/core/autocomplete/autocomplete";
import { PhoneField, phoneField, formPhoneField } from "@web/views/fields/phone/phone_field";

async function showText(rpc, value) {
    const data = await rpc("/dgii_ws", {
        term: value
    });
    console.log(data)
}
//'132744632'
export class IntlPhoneField extends PhoneField {
    static props = { ...standardFieldProps };
    setup() {
        super.setup()
        console.log(this.props.record.data);
        this.rpc = useService("rpc")

        this.inputRef = useChildRef();
        useInputField({ getValue: () => this.props.record.data[this.props.name] || "", parse: (v) => this.parse(v), ref: this.inputRef});
    }

    get isValidPhone(){
        let value = this.props.record.data[this.props.name]
        console.log(value)
        return true
    }

    get getText(){
        let value = this.props.record.data[this.props.name]
        if(value != ""){
            showText(this.rpc, value)
            //const data = await this.rpc("/owl_tips")
            console.log(this)   
        
        }
        console.log("A")
        return true
    }

    onSelect(){
        console.log("onSelect")
    }

    get source(){
        return []
    }
}

IntlPhoneField.template = "owl_tips.IntlPhoneField";
IntlPhoneField.components = { AutoComplete }

export const intlPhoneFieldProps = {
    component: IntlPhoneField,
    
}


registry.category("fields").add("intl_phone",intlPhoneFieldProps);
