# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('stew', '0011_auto_20150322_0224'),
    ]

    operations = [
        migrations.AlterField(
            model_name='stewdent',
            name='gender',
            field=models.CharField(max_length=10, null=True, choices=[(b'Male', b'Male'), (b'Female', b'Female')]),
            preserve_default=True,
        ),
    ]
