# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('stew', '0005_skills'),
    ]

    operations = [
        migrations.CreateModel(
            name='Skill',
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
        migrations.RemoveField(
            model_name='skills',
            name='stewdent',
        ),
        migrations.DeleteModel(
            name='Skills',
        ),
    ]
