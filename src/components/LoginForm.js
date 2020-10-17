import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import {useDispatch} from 'react-redux'
import {setUser} from '../reducers/userReducer'

const LoginForm = () => {

  const dispatch = useDispatch()
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('')

  const handleLogin = (event) => {
        event.preventDefault()
        dispatch(setUser({username, password }))
        setUsername('')
        setPassword('')
      } 

  return (
    <Form onSubmit={handleLogin}>
      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Username" value={username} onChange={({target}) => setUsername(target.value)}/>
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={({target}) => setPassword(target.value)}/>
      </Form.Group>

        <button type="submit">submit</button>
  </Form>
  )
}

export default LoginForm
