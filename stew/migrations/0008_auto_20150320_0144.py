# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('stew', '0007_auto_20150318_1418'),
    ]

    operations = [
        migrations.CreateModel(
            name='Work',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('industry_one', models.CharField(max_length=100)),
                ('industry_two', models.CharField(max_length=100)),
                ('company_one', models.CharField(max_length=100)),
                ('company_two', models.CharField(max_length=100)),
                ('other_goals', models.CharField(max_length=1000)),
                ('stewdent', models.OneToOneField(to='stew.Stewdent')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.AddField(
            model_name='stewdent',
            name='gender',
            field=models.CharField(max_length=10, null=True, choices=[(b'MALE', b'MALE'), (b'FEMALE', b'FEMALE')]),
            preserve_default=True,
        ),
    ]
