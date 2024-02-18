import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
// import recipes from '../assets/data';
import { Link } from 'react-router-dom';
import { ReactComponent as BackIcon } from '../assets/back.svg'

const RecipePage = () => {

  let {id: recipeId} = useParams();
  let navigate = useNavigate();

  // let recipe = recipes.find(recipe => recipe.id === Number(id))
  let [recipe, setRecipe] = useState(null)

  useEffect(() => {
    let getRecipe = async () => {
      if(recipeId === 'new') return;
      let response = await fetch(`/api/recipes/${recipeId}`,{
        method: 'GET'
      })
      let data = await response.json()
      setRecipe(data)
    }
    
    getRecipe()
  }, [recipeId])
  
  

  let handleSubmit = () => {
    if(recipeId !== 'new' && !recipe.body) {
      deleteRecipe()
    }
    else if(recipeId !== 'new') {
      updateRecipe()
    }
    else if(recipeId === 'new' && recipe !== null) {
      createRecipe()
    }
    navigate('/')
  }

  let createRecipe = async () => {
    await fetch(`/api/recipes/`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...recipe, 'updated':new Date() })
    })
    navigate('/')
  }

  let updateRecipe = async () => {
    await fetch(`/api/recipes/${recipeId}/`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipe)
    })
  }

  let deleteRecipe = async () => {
    await fetch(`/api/recipes/${recipeId}/`, {
      method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json'
      }
    })
    navigate('/')
  }

  return (
    <div className="recipe">
      <div className="recipe-header">
        <h3>
          <Link to="/"><BackIcon onClick={handleSubmit} /></Link>
        </h3>
        {recipeId !== 'new' ? (
          <button onClick={deleteRecipe}>Delete</button>
        ):
        (
          <button onClick={handleSubmit}>Done</button>
        )}
      </div>
        <textarea onChange={(e) => {setRecipe({...recipe, 'body':e.target.value})}} value={recipe?.body}></textarea>
    </div>
  )
}

export default RecipePage
