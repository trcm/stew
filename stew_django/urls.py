from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
                       # Examples:
                       # url(r'^$', 'stew_django.views.home', name='home'),
                       # url(r'^blog/', include('blog.urls')),
                       url(r'^admin/$', include(admin.site.urls)),
                       url(r'^', include('stew.urls')),
                       # url(r'^stew/', include('stew.urls'))
)
