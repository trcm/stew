# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('stew', '0006_auto_20150318_1414'),
    ]

    operations = [
        migrations.RenameField(
            model_name='skill',
            old_name='langagues_spoken',
            new_name='languages_spoken',
        ),
    ]
