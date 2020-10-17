import React from 'react'
import {useDispatch} from 'react-redux'
import { deleteDream } from '../reducers/dreamReducer'
import { format } from 'date-fns'

import empty from '../assets/empty.svg'

const DreamList = ({dreamsToShow}) => {
  const dispatch = useDispatch()

  if (dreamsToShow.length !== 0) {
    return (
      <div className='dreamList'>
        <ul>
          {dreamsToShow.map(dream => 
            <li key={dream.id}> 
              <div> <h2> {dream.title} </h2> {format(Date.parse(dream.date), 'PPpp')} </div> 
              <p>{dream.content}</p>  
              <button onClick={() => dispatch(deleteDream(dream.id))}>delete</button></li>
          )}
        </ul>      
      </div>
    )
  }
  return (
    <div className='emptyList'>
      <img src={empty} alt='no dreams'></img>    
      <p>No Dreams Found!</p>
    </div>

  )
}


export default DreamList