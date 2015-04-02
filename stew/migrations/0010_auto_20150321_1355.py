# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('stew', '0009_auto_20150321_0410'),
    ]

    operations = [
        migrations.AlterField(
            model_name='skill',
            name='personal',
            field=models.CharField(max_length=500, null=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='stewdent',
            name='gender',
            field=models.CharField(max_length=10, null=True, choices=[(b'MALE', b'male'), (b'FEMALE', b'male')]),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='work',
            name='company_one',
            field=models.CharField(max_length=100, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='work',
            name='company_two',
            field=models.CharField(max_length=100, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='work',
            name='industry_one',
            field=models.CharField(max_length=100, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='work',
            name='industry_two',
            field=models.CharField(max_length=100, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='work',
            name='other_goals',
            field=models.CharField(max_length=1000, null=True, blank=True),
            preserve_default=True,
        ),
    ]
