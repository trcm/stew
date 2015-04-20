# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Skill',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('creativeDesignSkill', models.TextField(max_length=1000, null=True, blank=True)),
                ('creativeDesignSoft', models.TextField(max_length=1000, null=True, blank=True)),
                ('techDesignSkill', models.TextField(max_length=1000, null=True, blank=True)),
                ('techDesignSoft', models.TextField(max_length=1000, null=True, blank=True)),
                ('itSkill', models.TextField(max_length=1000, null=True, blank=True)),
                ('itSoft', models.TextField(max_length=1000, null=True, blank=True)),
                ('marketSkill', models.TextField(max_length=1000, null=True, blank=True)),
                ('marketSoft', models.TextField(max_length=1000, null=True, blank=True)),
                ('writingSkill', models.TextField(max_length=1000, null=True, blank=True)),
                ('writingSoft', models.TextField(max_length=1000, null=True, blank=True)),
                ('mediaSkill', models.TextField(max_length=1000, null=True, blank=True)),
                ('mediaSoft', models.TextField(max_length=1000, null=True, blank=True)),
                ('financeSkill', models.TextField(max_length=1000, null=True, blank=True)),
                ('financeSoft', models.TextField(max_length=1000, null=True, blank=True)),
                ('researchSkill', models.TextField(max_length=1000, null=True, blank=True)),
                ('researchSoft', models.TextField(max_length=1000, null=True, blank=True)),
                ('personalSkill', models.TextField(max_length=1000, null=True, blank=True)),
                ('personalSoft', models.TextField(max_length=1000, null=True, blank=True)),
                ('otherSkill', models.TextField(max_length=1000, null=True, blank=True)),
                ('otherSoft', models.TextField(max_length=1000, null=True, blank=True)),
                ('languages_coding', models.TextField(max_length=1000, null=True, blank=True)),
                ('languages_spoken', models.TextField(max_length=1000, null=True, blank=True)),
            ],
            options={
                'ordering': ('stewdent',),
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Stewdent',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('created', models.DateTimeField(auto_now=True)),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('gender', models.CharField(max_length=30, null=True, choices=[(b'Male', b'Male'), (b'Female', b'Female'), (b'Not specified', b'Not specified')])),
                ('dob', models.DateField()),
                ('university', models.CharField(max_length=300)),
                ('student_num', models.CharField(max_length=50, null=True, blank=True)),
                ('degree', models.CharField(max_length=500, null=True, blank=True)),
                ('start_year', models.CharField(max_length=4)),
                ('end_year', models.CharField(max_length=4)),
                ('occupation', models.CharField(max_length=100, blank=True)),
                ('phone_num', models.CharField(max_length=50, null=True, blank=True)),
                ('email', models.EmailField(max_length=75, unique=True, null=True)),
                ('address', models.CharField(max_length=200, null=True, blank=True)),
                ('city', models.CharField(max_length=100)),
                ('state', models.CharField(max_length=3, choices=[(b'QLD', b'QLD'), (b'NSW', b'NSW'), (b'VIC', b'VIC'), (b'TAS', b'TAS'), (b'ACT', b'ACT'), (b'SA', b'SA'), (b'WA', b'WA'), (b'NT', b'NT')])),
                ('post_code', models.CharField(max_length=5, null=True, blank=True)),
                ('country', models.CharField(max_length=100)),
                ('user', models.OneToOneField(null=True, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ('created',),
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Work',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('industry_one', models.CharField(max_length=100, null=True, blank=True)),
                ('industry_two', models.CharField(max_length=100, null=True, blank=True)),
                ('company_one', models.CharField(max_length=100, null=True, blank=True)),
                ('company_two', models.CharField(max_length=100, null=True, blank=True)),
                ('other_goals', models.CharField(max_length=1000, null=True, blank=True)),
                ('exp_industry_one', models.CharField(max_length=100, null=True, blank=True)),
                ('exp_company_one', models.CharField(max_length=100, null=True, blank=True)),
                ('exp_duration_one', models.CharField(max_length=100, null=True, blank=True)),
                ('exp_learning_one', models.CharField(max_length=1000, null=True, blank=True)),
                ('exp_industry_two', models.CharField(max_length=100, null=True, blank=True)),
                ('exp_company_two', models.CharField(max_length=100, null=True, blank=True)),
                ('exp_duration_two', models.CharField(max_length=100, null=True, blank=True)),
                ('exp_learning_two', models.CharField(max_length=1000, null=True, blank=True)),
                ('exp_industry_three', models.CharField(max_length=100, null=True, blank=True)),
                ('exp_company_three', models.CharField(max_length=100, null=True, blank=True)),
                ('exp_duration_three', models.CharField(max_length=100, null=True, blank=True)),
                ('exp_learning_three', models.CharField(max_length=1000, null=True, blank=True)),
                ('stewdent', models.OneToOneField(to='stew.Stewdent')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.AddField(
            model_name='skill',
            name='stewdent',
            field=models.OneToOneField(to='stew.Stewdent'),
            preserve_default=True,
        ),
    ]
