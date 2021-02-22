from django.conf.urls import url
from django.contrib import admin
#from django.contrib import admin

from django.urls import path
from .view import (
        PostCreateAPIView,
        PostDeleteAPIView,
        PostDetailAPIView,
        PostListAPIView,
        PostUpdateAPIView
        )

app_name = 'blog'

urlpatterns=[
    path('',PostListAPIView.as_view(),name='post_list'),
    #id
    url(r'^create/$',PostCreateAPIView.as_view(), name = 'create'),
    url(r'^(?P<pk>\d+)/$',PostDetailAPIView.as_view(), name = 'detail'),
    url(r'^(?P<pk>\d+)/edit/$',PostUpdateAPIView.as_view(), name = 'update'),
    url(r'^(?P<pk>\d+)/delete/$',PostDeleteAPIView.as_view(), name = 'delete'),

    #slug
    # url(r'^(?P<slug>[\w-]+)/$',PostDetailAPIView.as_view(), name = 'detail'),
    # url(r'^(?P<slug>[\w-]+)/edit/$',PostUpdateAPIView.as_view(), name = 'update'),
    # url(r'^(?P<slug>[\w-]+)/delete/$',PostDeleteAPIView.as_view(), name = 'delete'),

   # Url(r'^S',PostListAPIView.as_view(), name = 'list'),
    # path('',views.post_list,name='post_list'),
   # path('',views.PostListView.as_view(), name='post_list'),
   #  path('tag/<slug:tag_slug>',views.post_list,name='post_list_by_tag'),
   #  path('<int:year>/<int:month>/<int:day>/<slug:post>/',
   #       views.post_detail,
   #       name='post_detail'),
   #  path('<int:post_id>/share/',
   #       views.post_share, name='post_share'),
]



#{post.title.substr(0, 3)}...
#{post.excerpt.substr(0, 3)}...