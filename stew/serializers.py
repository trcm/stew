# from django.forms import widgets
from rest_framework import serializers
from stew.models import Stewdent, Skill, Work
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User

class StewdentSerializer(serializers.Serializer):
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

    pk            = serializers.IntegerField(read_only=True)
    user          = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    first_name    = serializers.CharField(max_length=100, required=True)
    last_name     = serializers.CharField(max_length=100, required=True)
    dob           = serializers.DateField(input_formats=['iso-8601'])
    # dob         = serializers.DateTimeField(required=True)
    university    = serializers.CharField(max_length=100, required=True)
    student_num   = serializers.CharField(max_length=50, required=False)
    degree        = serializers.CharField(max_length=50, required=True)
    # start_year  = serializers.DateField(required=True)
    # end_year    = serializers.DateField(required=True)
    start_year    = serializers.CharField(max_length=4, required=True)
    end_year      = serializers.CharField(max_length=4, required=True)
    occupation    = serializers.CharField(max_length=100, required=False)
    phone_num     = serializers.CharField(max_length=50, required=False)
    student_email = serializers.EmailField(required=True)
    address       = serializers.CharField(max_length=200, required=False)
    city          = serializers.CharField(max_length=100, required=True)
    state         = serializers.ChoiceField(choices=STATES, required=True)
    gender        = serializers.ChoiceField(choices=GENDERS, required=False)
    post_code     = serializers.CharField(max_length=5, required=False)
    country       = serializers.CharField(max_length=100, required=True)

# class StewdentSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Stewdent
        fields = ('created',
                  'first_name',
                  'last_name',
                  'dob',
                  'university',
                  'student_num',
                  'degree',
                  'start_year',
                  'end_year',
                  'occupation',
                  'phone_num',
                  'student_email',
                  'address',
                  'city',
                  'state',
                  'post_code',
                  'country'
        )

    def create(self, validated_data):

        return Stewdent.objects.create(**validated_data)


class SkillSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Skill
    # stewdent         = serializers.OneToOneField('Stewdent')
    # software_skills  = serializers.CharField(max_length=500, blank=False)
    # computer_based   = serializers.CharField(max_length=500, blank=False)
    # personal         = serializers.CharField(max_length=500)
    # langagues_spoken = serializers.CharField(max_length=500, blank=False)
    # smartphone       = serializers.CharField(max_length=100)
    # tablet           = serializers.CharField(max_length=100)


class WorkSerializer(serializers.ModelSerializer):

    industry_one       = serializers.CharField(allow_blank=True, required=False)
    industry_two       = serializers.CharField(allow_blank=True, required=False)
    company_one        = serializers.CharField(allow_blank=True, required=False)
    company_two        = serializers.CharField(allow_blank=True, required=False)
    other_goals        = serializers.CharField(allow_blank=True, required=False)

    exp_industry_one   = serializers.CharField(allow_blank=True, required=False)
    exp_company_one    = serializers.CharField(allow_blank=True, required=False)
    exp_duration_one   = serializers.CharField(allow_blank=True, required=False)
    exp_learning_one   = serializers.CharField(allow_blank=True, required=False)

    exp_industry_two   = serializers.CharField(allow_blank=True, required=False)
    exp_company_two    = serializers.CharField(allow_blank=True, required=False)
    exp_duration_two   = serializers.CharField(allow_blank=True, required=False)
    exp_learning_two   = serializers.CharField(allow_blank=True, required=False)

    exp_industry_three = serializers.CharField(allow_blank=True, required=False)
    exp_company_three  = serializers.CharField(allow_blank=True, required=False)
    exp_duration_three = serializers.CharField(allow_blank=True, required=False)
    exp_learning_three = serializers.CharField(allow_blank=True, required=False)

    class Meta:
        model = Work
        depth = 1
