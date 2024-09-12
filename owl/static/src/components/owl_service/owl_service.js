/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Layout } from "@web/search/layout";
import { getDefaultConfig } from "@web/views/view";
import { useService } from "@web/core/utils/hooks";

import { Component, useSubEnv, useState } from "@odoo/owl";

export class OwlService extends Component {
  setup() {
    useSubEnv({
      config: {
        ...getDefaultConfig(),
        ...this.env.config,
      },
    });
    this.state = useState({ partners: [] });
    this.orm = useService("orm");
    console.log("aaa");
  }
  async getOrmService() {
    const data = await this.orm.searchRead("res.partner", [], ["name"]);
    console.log(data);
    this.state.partners = data;
  }
}

OwlService.template = "owl.OwlService";
OwlService.components = { Layout };

registry.category("actions").add("owl.OwlService", OwlService);
