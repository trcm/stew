# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('stew', '0013_stewdent_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='stewdent',
            name='user',
        ),
    ]
