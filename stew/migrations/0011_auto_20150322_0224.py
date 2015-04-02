# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('stew', '0010_auto_20150321_1355'),
    ]

    operations = [
        migrations.AddField(
            model_name='work',
            name='exp_company_one',
            field=models.CharField(max_length=100, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='work',
            name='exp_company_three',
            field=models.CharField(max_length=100, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='work',
            name='exp_company_two',
            field=models.CharField(max_length=100, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='work',
            name='exp_duration_one',
            field=models.CharField(max_length=100, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='work',
            name='exp_duration_three',
            field=models.CharField(max_length=100, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='work',
            name='exp_duration_two',
            field=models.CharField(max_length=100, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='work',
            name='exp_industry_one',
            field=models.CharField(max_length=100, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='work',
            name='exp_industry_three',
            field=models.CharField(max_length=100, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='work',
            name='exp_industry_two',
            field=models.CharField(max_length=100, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='work',
            name='exp_learning_one',
            field=models.CharField(max_length=1000, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='work',
            name='exp_learning_three',
            field=models.CharField(max_length=1000, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='work',
            name='exp_learning_two',
            field=models.CharField(max_length=1000, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='stewdent',
            name='gender',
            field=models.CharField(max_length=10, null=True, choices=[(b'male', b'male'), (b'female', b'female')]),
            preserve_default=True,
        ),
    ]
