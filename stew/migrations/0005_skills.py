# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('stew', '0004_auto_20150318_0857'),
    ]

    operations = [
        migrations.CreateModel(
            name='Skills',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('software_skills', models.CharField(max_length=500)),
                ('computer_based', models.CharField(max_length=500)),
                ('personal', models.CharField(max_length=500)),
                ('langagues_spoken', models.CharField(max_length=500)),
                ('smartphone', models.CharField(max_length=100)),
                ('tablet', models.CharField(max_length=100)),
                ('stewdent', models.OneToOneField(to='stew.Stewdent')),
            ],
            options={
                'ordering': ('stewdent',),
            },
            bases=(models.Model,),
        ),
    ]
