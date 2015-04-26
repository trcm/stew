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

    UNI = (
        ('Australian Catholic University', 'Australian Catholic University'),
        ('Australian National University',  'Australian National University'),
        ('Bond University', 'Bond University'),
        ('Central Queensland University',  'Central Queensland University'),
        ('Charles Darwin University',  'Charles Darwin University'),
        ('Charles Sturt University',  'Charles Sturt University'),
        ('Curtin University', 'Curtin University'),
        ('Deakin University', 'Deakin University'),
        ('Edith Cowan University', 'Edith Cowan University'),
        ('Federation University', 'Federation University'),
        ('Flinders University', 'Flinders University'),
        ('Griffith University', 'Griffith University'),
        ('James Cook University', 'James Cook University'),
        ('La Trobe University', 'La Trobe University'),
        ('Macquarie University', 'Macquarie University'),
        ('Monash University', 'Monash University'),
        ('Murdoch University', 'Murdoch University'),
        ('Queensland University of Technology', 'Queensland University of Technology'),
        ('RMIT University', 'RMIT University'),
        ('Southern Cross University', 'Southern Cross University'),
        ('Swinburne University of Technology', 'Swinburne University of Technology'),
        ('University of Adelaide', 'University of Adelaide'),
        ('University of Canberra', 'University of Canberra'),
        ('University of Melbourne', 'University of Melbourne'),
        ('University of New England', 'University of New England'),
        ('University of New South Wales', 'University of New South Wales'),
        ('University of Newcastle', 'University of Newcastle'),
        ('University of Notre Dame', 'University of Notre Dame'),
        ('University of Queensland', 'University of Queensland'),
        ('University of South Australia', 'University of South Australia'),
        ('University of Southern Queensland', 'University of Southern Queensland'),
        ('University of Sydney', 'University of Sydney'),
        ('University of Tasmania', 'University of Tasmania'),
        ('University of Technology Sydney', 'University of Technology Sydney'),
        ('University of the Sunshine Coast', 'University of the Sunshine Coast'),
        ('University of Western Australia', 'University of Western Australia'),
        ('University of Western Sydney', 'University of Western Sydney'),
        ('University of Wollongong', 'University of Wollongong'),
        ('Victoria University', 'Victoria University'),
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
    university    = models.CharField(max_length=300, choices=UNI, blank=False)
    student_num   = models.CharField(max_length=50, blank=True, null=True)
    degree        = models.CharField(max_length=500, blank=True, null=True)
    # start_year    = models.DateField(blank=False)
    # end_year      = models.DateField(blank=False)
    start_year    = models.CharField(max_length=4, blank=False)
    end_year      = models.CharField(max_length=4, blank=False)
    occupation    = models.CharField(max_length=100, blank=True)
    phone_num     = models.CharField(max_length=50, blank=True, null=True)
    email = models.EmailField(unique=True, blank=False, null=True)
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

    # stewdent         = models.OneToOneField('stewdent')
    # software_skills  = models.CharField(max_length=3000, blank=False)
    # computer_based   = models.CharField(max_length=3000, blank=False)
    # personal         = models.CharField(max_length=3000, blank=True, null=True)
    # languages_coding = models.CharField(max_length=3000, blank=True, null=True)
    # languages_spoken = models.CharField(max_length=300, blank=False)
    # smartphone       = models.CharField(max_length=100, blank=True, null=True)
    # tablet           = models.CharField(max_length=100, blank=True, null=True)

    stewdent            = models.OneToOneField('stewdent')
    creativeDesignSkill = models.TextField(max_length=1000, blank=True, null=True)
    creativeDesignSoft  = models.TextField(max_length=1000, blank=True, null=True)
    techDesignSkill     = models.TextField(max_length=1000, blank=True, null=True)
    techDesignSoft      = models.TextField(max_length=1000, blank=True, null=True)
    itSkill             = models.TextField(max_length=1000, blank=True, null=True)
    itSoft              = models.TextField(max_length=1000, blank=True, null=True)
    marketSkill         = models.TextField(max_length=1000, blank=True, null=True)
    marketSoft          = models.TextField(max_length=1000, blank=True, null=True)
    writingSkill        = models.TextField(max_length=1000, blank=True, null=True)
    writingSoft         = models.TextField(max_length=1000, blank=True, null=True)
    mediaSkill          = models.TextField(max_length=1000, blank=True, null=True)
    mediaSoft           = models.TextField(max_length=1000, blank=True, null=True)
    financeSkill        = models.TextField(max_length=1000, blank=True, null=True)
    financeSoft         = models.TextField(max_length=1000, blank=True, null=True)
    researchSkill       = models.TextField(max_length=1000, blank=True, null=True)
    researchSoft        = models.TextField(max_length=1000, blank=True, null=True)
    personalSkill       = models.TextField(max_length=1000, blank=True, null=True)
    personalSoft        = models.TextField(max_length=1000, blank=True, null=True)
    otherSkill          = models.TextField(max_length=1000, blank=True, null=True)
    otherSoft           = models.TextField(max_length=1000, blank=True, null=True)
    languages_coding    = models.TextField(max_length=1000, blank=True, null=True)
    languages_spoken    = models.TextField(max_length=1000, blank=True, null=True)

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
