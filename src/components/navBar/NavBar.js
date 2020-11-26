import React from 'react'
import { clearUser } from '../../reducers/userReducer';
import { clearDreamsOnLogout } from '../../reducers/dreamReducer'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './style.css'

const NavBar = () => {

  const dispatch = useDispatch() 

  const handleLogout = () => {
    dispatch(clearDreamsOnLogout())
    dispatch(clearUser())
  }

  return (
    <nav className='navBar'>
      <ul>
        <li><i className="fas fa-user fa-1x"></i><Link to="/profile" className='navLink'><p>Profile</p></Link></li>
        <li><i className="fas fa-home fa-1x"></i><Link to="/dashboard" className='navLink'><p>Home</p></Link></li>
        <li><i className="fas fa-chart-line fa-1x"></i><Link to="/trends" className='navLink'><p>Trends</p></Link></li>
        <li><i className="fas fa-door-open fa-1x"></i><Link to="/" className='navLink' onClick={handleLogout}><p>Logout</p></Link></li>
      </ul>
    </nav>
  )
}

export default NavBar