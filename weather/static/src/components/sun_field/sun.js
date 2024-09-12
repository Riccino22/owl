/** @odoo-module */

import { registry } from '@web/core/registry';
import { CharField, charField } from "@web/views/fields/char/char_field";

export class SunField extends CharField {
    setup(){
        super.setup()
        console.log("first")
    }
}

SunField.supportedTypes = ['char']

registry.category("fields").add("sun", SunField)