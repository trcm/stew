from rest_framework import generics

from rest_framework.views import APIView
from django.views.generic.base import TemplateView
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication, TokenAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.authtoken.models import Token

from stew.authentication import *
from stew.models import Stewdent, Skill, Work
from stew.serializers import StewdentSerializer, SkillSerializer, WorkSerializer, UserSerializer

from django.shortcuts import render
from django.http import HttpResponse, Http404
from django.views.decorators.csrf import csrf_exempt
from django.db.utils import IntegrityError
from django.db import IntegrityError
from django.core import serializers
from django.contrib.auth.models import User

import json

def home(request):
    return render(request, 'base.djhtml')


def getStewdent(pk):
    try:
        return Stewdent.objects.get(pk=pk)
    except Stewdent.DoesNotExist:
        print "error yo"
        raise Http404

def getSkill(pk):
    print 'getting stewdent'
    try:
        stew = Stewdent.objects.get(id=pk)
        print stew.first_name
        return Skill.objects.get(stewdent_id=pk)

    except Stewdent.DoesNotExist:
        print "Error: Stewdent does not exist"
        return None

    except Skill.DoesNotExist:
        print "Error"
        return None

class LoginView(TemplateView):
    template_name = 'login.html'

class AuthView(APIView):
    authentication_classes = (TokenAuthentication,)
    serializer_class = UserSerializer

    # def post(self, request, *args, **kwargs):
    #     print request.META.get( 'HTTP_AUTHORIZATION' )

    #     return Response(self.serializer_class(request.user).data)

    def get(self, request, format=None):
        content = {
            'user': unicode(request.user),  # `django.contrib.auth.User` instance.
            'auth': unicode(request.auth),  # None
        }
        return Response(content)

class AdminList(APIView):
    authentication_classes = (TokenAuthentication, )
    permission_classes = (IsAuthenticated, )
    pass

# @csrf_exempt
class StewdentCreate(APIView):

    def post(self, request, format=None):
        prob = {}
        try:
            u = User.objects.create(username=request.data['email'])
        except Exception as e:
            print e
            prob = {'error': 'An account for this email as already been created.'}
            return Response(prob, status=status.HTTP_400_BAD_REQUEST)
        ret = request.data
        ret['user'] = u.id
        print u.id

        serializer = StewdentSerializer(data=ret)
        print "serial"
        if serializer.is_valid():
            print 'valid'
            try:
                ret = request.data
                ret['user'] = u.id
                print u.id
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)

            except Exception as e:
                print 'generic'
                print e
                error = {}
                if "Duplicate entry" in e[1]:
                    error['email'] = "This email is already in use"
                print serializers.errors
                return Response(error, status=status.HTTP_400_BAD_REQUEST)
            except IntegrityError:
                print 'e'
                print e, type(e), repr(e)
                # serializer.save()
                print serializers.errors
                return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)

            print "ret"
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print 'err'
            print serializer.errors
            prob = serializer.errors.copy()
            u.delete()
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        # print serializer.data
    # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class StewdentList(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
    
    def get(self, request, format=None):
        stewdents = Stewdent.objects.all()
        serializer = StewdentSerializer(stewdents, many=True)
        return Response(serializer.data)
    
# @csrf_exempt
class StewdentDetail(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get(self, request, pk, format=None):
        stewdent = getStewdent(pk)
        skills = getSkill(pk)
        serializer = StewdentSerializer(stewdent)
        serialSkill = SkillSerializer(skills)
        ret = serializer.data
        ret['skills'] = serialSkill.data
        print serializer.data
        return Response(ret)
        # return Response(serializer.data)

    def put(self, request, pk, format=None):
        print request.data
        try:
            stewdent = getStewdent(pk)
            serializer = StewdentSerializer(stewdent, data=request.data)
            print serializer.initial_data
            if serializer.is_valid():
                serializer.save()
                return Response(status=200)
            print serializer.errors
            return Response(serializer.errors, status=400)
        except Exception as e:
            print e

    def delete(self, request, pk, format=None):
        print "delete"
        stewdent = getStewdent(pk)
        skill = getSkill(pk)
        user = stewdent.user
        user.delete()
        stewdent.delete()
        skill.delete()

        try:
            dents = Stewdent.objects.all()
            serial = StewdentSerializer(dents, many=True)
            skills = Skill.objects.all()
            skillSerial = SkillSerializer(skills, many=True)
            ret = [serial.data, skillSerial.data]
            return Response(ret)
        except Exception as e:
            print e
        
        return Response(serial.data)

class SkillList(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
    
    def get(self, requet, format=None):
        try:
            skills = Skill.objects.all()
            serializer = SkillSerializer(skills, many=True)
            return Response(serializer.data)
        except Exception as e:
            print e

class SkillDetail(APIView):

    def get(self, request, pk, format=None):
        print "Skillget"
        skill = getSkill(pk)
        if not skill:
            print "404"
            raise Http404
        serializer = SkillSerializer(skill)
        return Response(serializer.data)


    def post(self, request, pk, format=None):
        """
        post creates a new instance of a skill object to be entered into the database

        Parameters:
request (HTTP request): request data sent from the angular form to be processed
pk (Integer): integer of the stewdent object this skill object will be associated with
        Returns:
        returns
            """
        print 'skill post'
        try:
            stewdent = Stewdent.objects.get(id=pk)
            ret = request.data
            print ret
            ret['stewdent_id'] = stewdent.id
            ret['stewdent'] = stewdent.id
            serializer = SkillSerializer(data=ret)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                # print serializer.errors
                # print "fdsaf"
                return Response(serializer.errors, status=400)
        except Stewdent.DoesNotExist:
            print "stewdent error"
            raise Http404
            # return Response(status=400)
        except IntegrityError as e:
            print "other"
            print e
            return Response(status=400)

    def put(self, request, pk, format=None):
        print request.data
        try:
            skill = getSkill(pk)
            serializer = SkillSerializer(skill, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(status=200)
                # return Response(serializer.data)
            print serializer.errors
            return Response(serializer.errors, status=400)
        except Exception as e:
            print e


class WorkList(APIView):

    def get(self, request, format=None):
        works = Work.objects.all()
        serializer = WorkSerializer(works, many=True)
        return Response(serializer.data)


class WorkDetail(APIView):

    def post(self, request, pk, format=None):
        """
        post creates a new instance of a skill object to be entered into the database

        Parameters:
request (HTTP request): request data sent from the angular form to be processed
pk (Integer): integer of the stewdent object this skill object will be associated with
        Returns:
        returns
            """
        print request.data
        print "pre copy"
        edit = request.data.copy()
        print "post copy"
        try:
            stewdent = Stewdent.objects.get(id=pk)
            print stewdent
            # print "edit dict"
            edit['stewdent'] = stewdent.id
            serializer = WorkSerializer(data=edit)
            if serializer.is_valid():
                serializer.save()
                return Response(status=status.HTTP_201_CREATED)
            else:
                print serializer.errors
                return Response(serializer.errors, status=400)
        except Stewdent.DoesNotExist:
            return Response(status=400)
        except Exception as e:
            print "other"
            print e.message
            return Response(status=400)
