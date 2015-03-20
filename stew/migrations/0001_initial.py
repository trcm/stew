# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Stewdent',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('dob', models.DateTimeField()),
                ('university', models.CharField(max_length=100)),
                ('studentNum', models.CharField(max_length=50)),
                ('degree', models.CharField(max_length=50)),
                ('start_year', models.DateField()),
                ('end_year', models.DateField()),
                ('occupation', models.CharField(max_length=100)),
                ('phone_num', models.CharField(max_length=50)),
                ('student_email', models.EmailField(max_length=75)),
                ('address', models.CharField(max_length=200, null=True, blank=True)),
                ('city', models.CharField(max_length=100)),
                ('state', models.CharField(max_length=3, choices=[(b'QLD', b'QLD'), (b'NSW', b'NSW'), (b'VIC', b'VIC'), (b'TAS', b'TAS'), (b'ACT', b'ACT'), (b'SA', b'SA'), (b'WA', b'WA'), (b'NT', b'NT')])),
                ('post_code', models.CharField(max_length=5)),
                ('country', models.CharField(max_length=100)),
            ],
            options={
                'ordering': ('created',),
            },
            bases=(models.Model,),
        ),
    ]
