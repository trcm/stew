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
    
    created       = models.DateTimeField(auto_now=True)
    first_name    = models.CharField(max_length=100, blank=False)
    last_name     = models.CharField(max_length=100, blank=False)
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
    personal         = models.CharField(max_length=500)
    languages_spoken = models.CharField(max_length=500, blank=False)
    smartphone       = models.CharField(max_length=100)
    tablet           = models.CharField(max_length=100)

    class Meta:
        ordering = ('stewdent', )

class Goal(models.Model):
    pass
    
