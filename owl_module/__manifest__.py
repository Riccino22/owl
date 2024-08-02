{
    'name': "Owl Module",
    'version': '1.0',
    'depends': ['base', 'web'],
    'author': "Author Name",
    'category': 'Category',
    'description': """
    Owl Module
    """,

    'data': [
        'views/owl_view.xml'
    ],
    
    'assets': {
        'web.assets_backend': ['owl_modules/static/src/**/*'],
    },

}