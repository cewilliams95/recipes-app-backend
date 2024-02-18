import React from 'react'
import {Link} from 'react-router-dom'

let getDate = (recipe) => {
  return new Date(recipe.updated).toLocaleDateString()
}
let getTitle = (recipe, full=false) => {
  const title = recipe.body.split('\n')[0]
  if(!full && title.length > 45) {
    return title.slice(0,45)+"..."
  }
  return title
}

let getContent = (recipe) => {
  const title = getTitle(recipe, true)
  let content = recipe.body.replaceAll('\n',' ').replace(title,"")

  if(content.length > 45) {
    return content.slice(0,45)+"..."
  }
  else {
    return content
  }
}

const ListItem = ({ recipe }) => {
  return (
    
    <Link to={`/recipe/${recipe.id}/`}>
      <div className='recipes-list-item'>
        <h3>{getTitle(recipe)}</h3>
        <p><span>{getDate(recipe)}</span>{getContent(recipe)}</p>
      </div>
      
    </Link>
  )
}

export default ListItem
