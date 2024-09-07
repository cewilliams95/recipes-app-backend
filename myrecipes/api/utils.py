from rest_framework.response import Response
from .models import Recipe
from .serializers import RecipeSerializer

def getAllRecipes(request):
    recipes = Recipe.objects.all().order_by('-updated')
    serializer = RecipeSerializer(recipes, many=True)
    return Response(serializer.data)

def createRecipe(request):
    data = request.data
    recipe = Recipe.objects.create(
	title=data['title'],
        body=data['body'],
	ingredients=data['ingredients'],
	directions=data['directions']
    )
    serializer = RecipeSerializer(recipe, many=False)
    return Response(serializer.data)

def getRecipeDetail(request, pk):
    recipe = Recipe.objects.get(id=pk)
    serializer = RecipeSerializer(recipe, many=False)
    return Response(serializer.data)

def updateRecipe(request,pk):
    data = request.data
    recipe = Recipe.objects.get(id=pk)
    serializer = RecipeSerializer(instance=recipe, data=data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
    
def deleteRecipe(request, pk):
    recipe = Recipe.objects.get(id=pk)
    recipe.delete()
    return Response('Recipe was deleted!')
