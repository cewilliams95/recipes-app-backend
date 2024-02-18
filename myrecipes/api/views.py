from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Recipe
from .serializers import RecipeSerializer
from .utils import getAllRecipes, getRecipeDetail, createRecipe, updateRecipe, deleteRecipe

'''
Converting to RESTful:
    Instead of going to /recipes/ for GET
    & /recipes/create/ for POST

    You would go to /recipes/ for both and do GET for reading & 
    POST for creating

    Same for /recipes/<id>/ for GET,PUT,DELETE
'''

@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/recipes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of recipes'
        },
        {
            'Endpoint': '/recipes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single recipe object'
        },
        {
            'Endpoint': '/recipes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new recipe with data sent in post request'
        },
        {
            'Endpoint': '/recipes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing recipe with data sent in post request'
        },
        {
            'Endpoint': '/recipes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting recipe'
        },
    ]
    return Response(routes)

@api_view(['GET', 'POST'])
def getRecipes(request):
    if request.method == 'GET':
        return getAllRecipes(request)
    elif request.method == 'POST':
        return createRecipe(request)

@api_view(['GET', 'PUT', 'DELETE'])
def getRecipe(request, pk):
    if request.method == 'GET':
        return getRecipeDetail(request, pk)
    elif request.method == 'PUT':
        return updateRecipe(request, pk)
    elif request.method == 'DELETE':
        return deleteRecipe(request, pk)

'''
Commented out the less restful ways of doing API crud views
'''
# @api_view(['PUT'])
# def updateRecipe(request, pk):
#     data = request.data
#     recipe = Recipe.objects.get(id=pk)
#     serializer = RecipeSerializer(instance=recipe, data=data)
#     if serializer.is_valid():
#         serializer.save()
#     return Response(serializer.data)

# @api_view(['DELETE'])
# def deleteRecipe(request, pk):
#     recipe = Recipe.objects.get(id=pk)
#     recipe.delete()
#     return Response('Note was delted!')

# @api_view(['POST'])
# def createRecipe(request):
#     data = request.data
#     recipe = Recipe.objects.create(
#         body=data['body']
#     )
#     serializer = RecipeSerializer(recipe, many=False)
#     return Response(serializer.data)