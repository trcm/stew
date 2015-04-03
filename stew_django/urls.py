from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
                       url(r'^admin/', include(admin.site.urls)),
                       url(r'^', include('stew.urls')),
                       # url(r'^stew/', include('stew.urls'))
)
