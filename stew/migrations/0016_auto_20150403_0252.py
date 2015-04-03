# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('stew', '0015_auto_20150403_0249'),
    ]

    operations = [
        migrations.AlterField(
            model_name='skill',
            name='stewdent',
            field=models.OneToOneField(to='stew.Stewdent'),
            preserve_default=True,
        ),
    ]
