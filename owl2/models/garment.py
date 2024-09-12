from odoo import fields, models
from dateutil.relativedelta import relativedelta


class EstateProperty(models.Model):
   _name = "estate.property"
   _description = "Real estate"

   name = fields.Char(string="Name")
   description = fields.Char(string="Description")
   postcode = fields.Char(string="PostCode")
   date_availability = fields.Date(string="Available From", default=fields.Datetime.today() + relativedelta(months=+3),
                                   copy=False)
   expected_price = fields.Float(string="Expected Price")
   selling_price = fields.Float(string="Selling Price", readonly=True)

   property_type = fields.Many2one("estate.type", string="Property Type")
   offer_id = fields.One2many("estate.offer", "property_id", string="Offer")

class EstateOffer(models.Model):
   _name = 'estate.offer'
   _rec_name = 'property_id'

   price = fields.Float(string="Price")
   status = fields.Selection(string="Status", selection=[('accepted', 'Accepted'), ('refused', 'Refused')],)
   partner_id = fields.Many2one("res.partner", string="Partner")
   property_id = fields.Many2one("estate.property", string="Property Id")
   dead_line = fields.Date(string="Validity", default=fields.Datetime.today())
   validity = fields.Integer(string="Dead line", default="7")