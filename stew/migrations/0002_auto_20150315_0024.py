# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('stew', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='stewdent',
            name='created',
            field=models.DateTimeField(auto_now=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='stewdent',
            name='student_email',
            field=models.EmailField(unique=True, max_length=75),
            preserve_default=True,
        ),
    ]
