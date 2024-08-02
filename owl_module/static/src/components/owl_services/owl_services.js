

import { registry } from "@web/core/registry";
import { Layout } from "@web/search/layout";
import { getDefaultConfig } from "@web/views/view";

import { Component, useSubEnv } from "@odoo/owl";

export class OwlServices extends Component {
    setup() {
        useSubEnv({
            config: {
                ...getDefaultConfig(),
                ...this.env.config,
            },
        });
    }
    getOrmService(){
        console.log("g");
    }
}

OwlServices.template = "owl_modules.OwlServices";
OwlServices.components = { Layout };

registry.category("actions").add("owl_modules.OwlServices", OwlServices);