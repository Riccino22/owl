# -*- coding: utf-8 -*-
{
    'name': 'Owl',
    'version': '17.0.1.0',
    'summary': """ Owl_partner Summary """,
    'author': '',
    'website': '',
    'category': '',
    'depends': ['base', 'web'],
    "data": [
        "views/owl_garment_views.xml",
        "security/ir.model.access.csv"
    ],'assets': {
            'web.assets_backend': [
                'owl2/static/src/components/my_widget.js',
                'owl2/static/src/components/my_widget.xml',
            ],
        },
    'application': True,
    'installable': True,
    'auto_install': False,
    'license': 'LGPL-3',
}
