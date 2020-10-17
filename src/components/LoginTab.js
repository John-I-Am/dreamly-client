import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'

const LoginTab = () => {
  return (
    <Tabs defaultActiveKey="login" className='loginTab'>
      <Tab eventKey="login" title="Login">
        <LoginForm/>
      </Tab>
      <Tab eventKey="register" title="Register">
        <RegisterForm/>
      </Tab>
    </Tabs>
  )
}

export default LoginTab