# -*- coding: utf-8 -*-
import logging

from odoo import models, fields, api
from odoo.exceptions import UserError, ValidationError

_logger = logging.getLogger(__name__)


class WeatherCurrent(models.Model):
    _name = 'weather.current'
    _description = 'WeatherCurrent'

    name = fields.Char('Name')
