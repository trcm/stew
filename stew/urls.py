from django.conf.urls import patterns, include, url
from rest_framework.urlpatterns import format_suffix_patterns
from django.contrib import admin
# from rest_framework.urlpatterns import for
from stew import views
from rest_framework.authtoken.views import obtain_auth_token


urlpatterns = patterns('',
                       url(r'^login/$', views.LoginView.as_view()),
                       url(r'^api-token-auth/$', obtain_auth_token),
                       url(r'^auth/', views.AuthView.as_view(), name='auth'),
                       url(r'^newStew/$', views.StewdentCreate.as_view(), name='stewdent-create'),
                       url(r'^stewdent/$', views.StewdentList.as_view(), name='stewdent-list'),
                       url(r'^stewdent/(?P<pk>[0-9]+)$', views.StewdentDetail.as_view(), name='stewdent-detail'),
                       url(r'^skill/$', views.SkillList.as_view(), name='skill-list'),
                       url(r'^skill/(?P<pk>[0-9]+)$', views.SkillDetail.as_view(), name='skill-detail'),
                       url(r'^work/$', views.WorkList.as_view(), name='work-detail'),
                       url(r'^work/(?P<pk>[0-9]+)?', views.WorkDetail.as_view(), name='work-detail'),
                       url(r'^$', views.home, name='index'),
                       # url(r'.*$', views.home, name='index')
)

urlpatterns = format_suffix_patterns(urlpatterns)
