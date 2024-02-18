import React, {useState, useEffect} from 'react'
// import recipes from '../assets/data'
import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'

const RecipesListPage = () => {
  let [recipes, setRecipes] = useState([])
  
  useEffect(() => {
    getRecipes()
  }, [])

  let getRecipes = async () => {
    let response = await fetch('/api/recipes/')
    let data = await response.json()
    setRecipes(data)
  }

  return (
    <div className="recipes">
      <div className="recipes-header">
        <h2 className='recipes-title'>&#9782; Recipes</h2>
        <p className="recipes-count">{recipes.length}</p>
      </div>
      <div className="recipes-list">
        {recipes.map((recipe, index) => (
            <ListItem key={index} recipe={recipe} />
        ))}
      </div>
      <AddButton/>
    </div>
  )
}

export default RecipesListPage
