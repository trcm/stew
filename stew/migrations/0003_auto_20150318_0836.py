# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('stew', '0002_auto_20150315_0024'),
    ]

    operations = [
        migrations.RenameField(
            model_name='stewdent',
            old_name='studentNum',
            new_name='student_num',
        ),
    ]
