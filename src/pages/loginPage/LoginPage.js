import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { setUserFromLocalStorage} from '../../reducers/userReducer'
import {Route, Redirect} from 'react-router-dom'
import LoginTab from '../../components/loginTab/LoginTab'

import './style.css'

const LoginPage = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    const loggedUser = window.localStorage.getItem('loggedUser')
    if (loggedUser) {
      const user = JSON.parse(loggedUser)
      dispatch(setUserFromLocalStorage(user))
    }
  }, [dispatch])

  const userState = useSelector(state => state.user)

  return (

    <div className='loginContainer'>
      <Route path='/login' render={() => userState === null ? <LoginTab /> : <Redirect to='/dashboard'/>}/>        
    </div>

  )
}

export default LoginPage