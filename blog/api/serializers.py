from rest_framework.serializers import ModelSerializer

from ..models import Post

class PostCreateSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = [
            'author',
            #'id',
            'title',
            #'slug',
            'body',
            'publish'

        ]


class PostListSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = [
            'author_id',
            'id',
            'title',
            'slug',
            'body'

        ]

class PostDetailSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = [
            'author_id',
            'id',
            'title',
            'slug',
            'body'

        ]
