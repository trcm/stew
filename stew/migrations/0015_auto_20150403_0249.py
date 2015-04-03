# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('stew', '0014_remove_stewdent_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='skill',
            name='stewdent',
            field=models.OneToOneField(null=True, to='stew.Stewdent'),
            preserve_default=True,
        ),
    ]
