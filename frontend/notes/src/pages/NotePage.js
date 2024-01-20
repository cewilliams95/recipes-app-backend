import React from 'react'
import { useParams  } from 'react-router-dom';
import notes from '../assets/data';
import { Link } from 'react-router-dom';
import { ReactComponent as BackIcon } from '../assets/back.svg'

const NotePage = () => {
  let { id } = useParams(); 
  console.log("ID: ", id)

  let note = notes.find(note => note.id === Number(id))
  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/"><BackIcon/></Link>
        </h3>
      </div>
        <textarea value={note?.body}></textarea>
    </div>
  )
}

export default NotePage
