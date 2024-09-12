# -*- coding: utf-8 -*-
{
    'name': 'Weather',
    'version': '17.0.1.0',
    'summary': """ Weather Summary """,
    'author': '',
    'website': '',
    'category': '',
    'depends': ['base', 'web'],
    "data": [
        "views/weather_current_views.xml",
        "security/ir.model.access.csv"
    ],'assets': {
            'web.assets_backend': [
                'weather/static/src/**/*'
            ],
        },
    'application': True,
    'installable': True,
    'auto_install': False,
    'license': 'LGPL-3',
}
