# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('stew', '0003_auto_20150318_0836'),
    ]

    operations = [
        migrations.AlterField(
            model_name='stewdent',
            name='dob',
            field=models.DateField(),
            preserve_default=True,
        ),
    ]
