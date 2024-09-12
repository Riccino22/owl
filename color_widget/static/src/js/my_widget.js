odoo.define('color_widget.ExampleWidget',[], function (require) {

    "use strict";

    var AbstractField = require('@point_of_sale/app/popup/abstract_awaitable_popup');

    var fieldRegistry = require('web.field_registry');

 

    var ExampleWidget = AbstractField.extend({

        // Widget code goes here

    });

 

    fieldRegistry.add('example_widget', ExampleWidget);

});