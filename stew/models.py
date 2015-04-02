from django.db import models


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
        ('Female', 'Female')
    )
    
    created       = models.DateTimeField(auto_now=True)
    first_name    = models.CharField(max_length=100, blank=False)
    last_name     = models.CharField(max_length=100, blank=False)
    gender        = models.CharField(max_length=10, choices=GENDERS, null=True)
    dob           = models.DateField(blank=False)
    university    = models.CharField(max_length=100, blank=False)
    student_num   = models.CharField(max_length=50)
    degree        = models.CharField(max_length=50)
    start_year    = models.DateField(blank=False)
    end_year      = models.DateField(blank=False)
    occupation    = models.CharField(max_length=100)
    phone_num     = models.CharField(max_length=50)
    student_email = models.EmailField(unique=True, blank=False)
    address       = models.CharField(max_length=200, blank=True, null=True)
    city          = models.CharField(max_length=100, blank=False)
    state         = models.CharField(max_length=3, choices=STATES, blank=False)
    post_code     = models.CharField(max_length=5)
    country       = models.CharField(max_length=100, blank=False)
    
    
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
