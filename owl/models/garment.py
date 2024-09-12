from odoo import fields, models

class Garment(models.Model):
    _name = 'owl.garment'
    
    name = fields.Char("Hi")