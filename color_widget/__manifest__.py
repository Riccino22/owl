# -*- coding: utf-8 -*-
{
    'name': 'Color_widget',
    'version': '17.0.1.0',
    'summary': """ Color_widget Summary """,
    'author': '',
    'website': '',
    'category': '',
    'depends': ['base', 'web', 'crm'],
    "data": [
        "security/ir.model.access.csv",
        "views/colors_key_views.xml",
    ],'assets': {
            'web.assets_backend': [
                'color_widget/static/src/components/*/*.js',
                'color_widget/static/src/components/*/*.xml',
            ],
        },
    'application': True,
    'installable': True,
    'auto_install': False,
    'license': 'LGPL-3',
}
