# -*- coding: utf-8 -*-
{
    "name": "Owl_tips",
    "version": "17.0.1.0",
    "summary": """ Owl_tips Summary """,
    "author": "",
    "website": "",
    "category": "",
    "depends": ["web", "partner_autocomplete"],
    "data": [
        "views/res_partner.xml",
    ],
    "assets": {
        "web.assets_backend": ["owl_tips/static/src/components/**/*"],
    },
    "application": True,
    "installable": True,
    "auto_install": False,
    "license": "LGPL-3",
}
