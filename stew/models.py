from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)

## Model to represent a student
class Stewdent(models.Model):

    STATES = (
        ('QLD', 'QLD'),
        ('NSW', 'NSW'),
        ('VIC', 'VIC'),
        ('TAS', 'TAS'),
        ('ACT', 'ACT'),
        ('SA', 'SA'),
        ('WA', 'WA'),
        ('NT', 'NT'),
    )

    GENDERS = (
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Not specified', 'Not specified')
        
    )

    user          = models.OneToOneField(User, null=True)
    created       = models.DateTimeField(auto_now=True)
    first_name    = models.CharField(max_length=100, blank=False)
    last_name     = models.CharField(max_length=100, blank=False)
    gender        = models.CharField(max_length=30, choices=GENDERS, null=True)
    dob           = models.DateField(blank=False)
    university    = models.CharField(max_length=300, blank=False)
    student_num   = models.CharField(max_length=50)
    degree        = models.CharField(max_length=500)
    # start_year    = models.DateField(blank=False)
    # end_year      = models.DateField(blank=False)
    start_year    = models.CharField(max_length=4, blank=False)
    end_year      = models.CharField(max_length=4, blank=False)
    occupation    = models.CharField(max_length=100)
    phone_num     = models.CharField(max_length=50)
    student_email = models.EmailField(unique=True, blank=False)
    address       = models.CharField(max_length=200, blank=True, null=True)
    city          = models.CharField(max_length=100, blank=False)
    state         = models.CharField(max_length=3, choices=STATES, blank=False)
    post_code     = models.CharField(max_length=5, blank=True, null=True)
    country       = models.CharField(max_length=100, blank=False)
    

    def __unicode__(self):
        return "%s %s" % (self.first_name, self.last_name)
    
    class Meta:
        ordering = ('created', )

    
        

class Skill(models.Model):

    stewdent         = models.OneToOneField('stewdent')
    software_skills  = models.CharField(max_length=500, blank=False)
    computer_based   = models.CharField(max_length=500, blank=False)
    personal         = models.CharField(max_length=500, null=True)
    languages_spoken = models.CharField(max_length=500, blank=False)
    smartphone       = models.CharField(max_length=100, blank=True, null=True)
    tablet           = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        ordering = ('stewdent', )

class Work(models.Model):
    """
Represents a work relation from the database.  The work table holds
information on the stewdents industry goals and experience.
"""

    stewdent         = models.OneToOneField('stewdent')
    industry_one     = models.CharField(max_length=100, null=True, blank=True)
    industry_two     = models.CharField(max_length=100, null=True, blank=True)
    company_one      = models.CharField(max_length=100, null=True, blank=True)
    company_two      = models.CharField(max_length=100, null=True, blank=True)
    other_goals      = models.CharField(max_length=1000, null=True, blank=True)

    exp_industry_one = models.CharField(null=True, blank=True, max_length=100)
    exp_company_one  = models.CharField(null=True, blank=True, max_length=100)
    exp_duration_one = models.CharField(null=True, blank=True, max_length=100)
    exp_learning_one = models.CharField(null=True, blank=True, max_length=1000)

    exp_industry_two = models.CharField(null=True, blank=True, max_length=100)
    exp_company_two  = models.CharField(null=True, blank=True, max_length=100)
    exp_duration_two = models.CharField(null=True, blank=True, max_length=100)
    exp_learning_two = models.CharField(null=True, blank=True, max_length=1000)

    exp_industry_three = models.CharField(null=True, blank=True, max_length=100)
    exp_company_three  = models.CharField(null=True, blank=True, max_length=100)
    exp_duration_three = models.CharField(null=True, blank=True, max_length=100)
    exp_learning_three = models.CharField(null=True, blank=True, max_length=1000)
