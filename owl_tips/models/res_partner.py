# -*- coding: utf-8 -*-
import logging

from odoo import models, fields, api
from odoo.exceptions import UserError, ValidationError

_logger = logging.getLogger(__name__)


class ResPartner(models.Model):
    _inherit = 'res.partner'

    username = fields.Char("Username")
    print("|\n"*20)

    def _get_view(self, view_id=None, view_type='form', **options):
        arch, view = super()._get_view(view_id, view_type, **options)

        if view_type == 'form':
            for node in arch.xpath(
                "//field[@name='name']"
                "|//field[@name='vat']"
            ):
                node.attrib['widget'] = 'dgii_autocomplete'
        
        return arch, view