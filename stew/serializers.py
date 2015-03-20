# from django.forms import widgets
from rest_framework import serializers
from stew.models import Stewdent, Skill

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

    pk = serializers.IntegerField(read_only=True)
    first_name = serializers.CharField(max_length=100, required=True)
    last_name = serializers.CharField(max_length=100, required=True)
    dob = serializers.DateField(input_formats=['iso-8601'])
    # dob = serializers.DateTimeField(required=True)
    university = serializers.CharField(max_length=100, required=True)
    student_num = serializers.CharField(max_length=50)
    degree = serializers.CharField(max_length=50)
    start_year = serializers.DateField(required=True)
    end_year = serializers.DateField(required=True)
    occupation = serializers.CharField(max_length=100)
    phone_num = serializers.CharField(max_length=50)
    student_email = serializers.EmailField(required=True)
    address = serializers.CharField(max_length=200, required=True)
    city = serializers.CharField(max_length=100, required=True)
    state = serializers.ChoiceField(choices=STATES, required=True)
    post_code = serializers.CharField(max_length=5)
    country = serializers.CharField(max_length=100, required=True)

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
