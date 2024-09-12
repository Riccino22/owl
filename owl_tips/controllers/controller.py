from odoo import http
import json

class Controller(http.Controller):
    @http.route('/owl_tips', type='json', auth='public')
    def index(self, **kw):
        return json.dumps({
            "Hi": "Ho"
        })