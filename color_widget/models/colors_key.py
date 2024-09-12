# -*- coding: utf-8 -*-
import logging

from odoo import models, fields, api, _
from odoo.exceptions import UserError, ValidationError

_logger = logging.getLogger(__name__)


class ColorsKey(models.Model):
    _name = 'colors.key'
    _description = 'ColorsKey'

    name = fields.Char('Name')
