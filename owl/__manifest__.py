# -*- coding: utf-8 -*-
{
    'name': 'Owl',
    'version': '17.0.1.0',
    'summary': """ Owl_partner Summary """,
    'author': '',
    'website': '',
    'category': '',
    'depends': ['base', 'web'],
    'data': [
        'views/owl_view.xml'
    ],'assets': {
            'web.assets_backend': [
                'owl/static/src/**/*'
            ],
        },
    'application': True,
    'installable': True,
    'auto_install': False,
    'license': 'LGPL-3',
}
