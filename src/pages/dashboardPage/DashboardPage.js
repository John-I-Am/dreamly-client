import React, {useEffect, useState} from 'react'
import DreamList from '../../components/dreamList/DreamList'
import DreamFormModal from '../../components/dreamFormModal/DreamFormModal'
import NavBar from '../../components/navBar/NavBar'
import Modal from 'react-modal'
import {setUserFromLocalStorage} from '../../reducers/userReducer'
import { useDispatch, useSelector } from 'react-redux'
import { initializeDreams } from '../../reducers/dreamReducer'
import { openModal } from '../../reducers/modalReducer'

import './style.css'

Modal.setAppElement('*')

const DashboardPage = () => {
  const dispatch = useDispatch()  
  const [search, setSearch] = useState('')
  const dreams = useSelector(state => state.dreams)
  const dreamsToShow = search === '' ? dreams : dreams.filter(dream => dream.content.includes(search))

  useEffect(() => {
    dispatch(initializeDreams()) 
  },[dispatch])

  const loggedUser = window.localStorage.getItem('loggedUser')
  if (loggedUser) {
    const user = JSON.parse(loggedUser)
    dispatch(setUserFromLocalStorage(user))
  }

  return (
    <div className='dashboard'> 
      <NavBar/>
      <div className='dashContent'>
        <div className='dashHeader'>
          <button onClick={() => dispatch(openModal())}>New Dream</button>
          <input placeholder='search' value={search} onChange={({target}) => setSearch(target.value)}/> 
          <h4>Show All</h4>
          <label class="switch">
            <input type="checkbox"/>
            <span class="slider round"></span>
          </label>

        </div>
        <DreamList dreamsToShow={dreamsToShow}/>    
        <DreamFormModal/>        
      </div>

    </div>
  )
}
export default DashboardPage