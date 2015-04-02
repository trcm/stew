from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework import status

from stew.models import Stewdent, Skill, Work
from stew.serializers import StewdentSerializer, SkillSerializer, WorkSerializer

from django.shortcuts import render
from django.http import HttpResponse, Http404
from django.views.decorators.csrf import csrf_exempt
from django.db.utils import IntegrityError
from django.core import serializers

import json

def home(request):
    return render(request, 'base.djhtml')


def getStewdent(pk):
    try:
        return Stewdent.objects.get(pk=pk)
    except Stewdent.DoesNotExist:
        print "error yo"
        return Response(status=400)

# @csrf_exempt
class StewdentList(APIView):
    # queryset = Stewdent.objects.all()
    # serializer_class = StewdentSerializer
 
    def get(self, request, format=None):
        stewdents = Stewdent.objects.all()
        serializer = StewdentSerializer(stewdents, many=True)
        # print serializer.data
        return Response(serializer.data)

    def post(self, request, format=None):
        # print request
        # print '\n\n\n', request.data, '\n'
        serializer = StewdentSerializer(data=request.data)
        print "a"
        print "blah"
        if serializer.is_valid(raise_exception=True):
            print 's'
            try:
                serializer.save()
            except Exception as e:
                print 'generic'
                print repr(e)
                # print e[1]
                # serializer.errors['email'] = 'You already have an account'
                # print type(serializer.errors)
                # print repr(serializer.errors)
                error = {}
                if "Duplicate entry" in e[1]:
                    error['email'] = "This email is already in use"
                return Response(error, status=status.HTTP_400_BAD_REQUEST)
            except IntegrityError:
                print 'e'
                print e, type(e), repr(e)
                # serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print "b"
        print serializer.errors
        # print serializer.data
        print "c"
        return JSONRenderer(serializer.errors)
    # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @csrf_exempt
class StewdentDetail(APIView):
    # def getStewdent(self, pk):
    #     try:
    #         return Stewdent.objects.get(pk=pk)
    #     except Stewdent.DoesNotExist:
    #         print "error yo"
    #         return Response(status=400) 

    def get(self, request, pk, format=None):
        stewdent = getStewdent(pk)

        serializer = StewdentSerializer(stewdent)
        print serializer.data
        return Response(serializer.data)

    def put(self, request, pk, format=None): 
        stewdent = getStewdent(pk)
        serializer = StewdentSerializer(stewdent, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def delete(self, request, pk, format=None):
        stewdent = getStewdent(pk)
        stewdent.delete()
        return Response(status=204)

class SkillList(APIView):

    def get(self, requet, format=None):
        skills = Skill.objects.all()
        serializer = SkillSerializer(skills, many=True)
        return Response(serializer.data)
    
class SkillDetail(APIView):

    def getSkill(self, pk):
        print 'getting stewdent'
        try:
            stew = Stewdent.objects.get(id=pk)
            print stew.first_name
            return Skill.objects.get(stewdent_id=pk)
        except Skill.DoesNotExist:
            print 'error'
            return Response(status=400)
        
    def get(self, request, pk, format=None):
        print "Skillget"
        skill = self.getSkill(pk)
        print skill.id
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
        print request.data
        try:
            stewdent = Stewdent.objects.get(id=pk)
            request.data['stewdent'] = stewdent.id
            serializer = SkillSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                print serializer.data
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                print serializer.errors
                return Response(serializer.errors, status=400)
        except Stewdent.DoesNotExist:
            print "stewdent error"
            return Response(status=400)
        except Exception as e:
            print "other"
            print e.message
            return Response(status=400)


class WorkList(APIView):
    pass

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
