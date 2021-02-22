#from rest_framework.generics import ListAPIView
from rest_framework.generics import (
    CreateAPIView,
    ListAPIView,
    UpdateAPIView,
    DestroyAPIView,
    RetrieveAPIView

)
from ..models import Post
from .serializers import (
    PostCreateSerializer,
    PostDetailSerializer,
    PostListSerializer
    )

class PostCreateAPIView(CreateAPIView):
    queryset =  Post.objects.all()
    serializer_class =  PostCreateSerializer
    #lookup_url_kwarg = 'slug'

#after detail view api
class PostDetailAPIView(RetrieveAPIView):
    queryset =  Post.objects.all()
    serializer_class =  PostDetailSerializer
    #lookup_url_kwarg = 'slug'

class PostUpdateAPIView(UpdateAPIView):
    queryset =  Post.objects.all()
    serializer_class =  PostDetailSerializer
    #lookup_url_kwarg = 'slug'

class PostDeleteAPIView(DestroyAPIView):
    queryset =  Post.objects.all()
    serializer_class =  PostDetailSerializer
    #lookup_url_kwarg = 'slug'


class PostListAPIView(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostListSerializer






