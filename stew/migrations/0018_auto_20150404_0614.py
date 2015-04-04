# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('stew', '0017_stewdent_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='stewdent',
            name='post_code',
            field=models.CharField(max_length=5, null=True, blank=True),
            preserve_default=True,
        ),
    ]
