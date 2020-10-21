import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import {useDispatch} from 'react-redux'
import {setUser} from '../reducers/userReducer'

const LoginForm = () => {

  const dispatch = useDispatch()
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('')
  const [errorVisibility, setErrorVisibility] = useState(false)

  const handleLogin = async (event) => {
        event.preventDefault()
        const response = await dispatch(setUser({username, password }))

        if (response === 2 && response !== 1) {
          setErrorVisibility(true)
        }
        setUsername('')
        setPassword('')
  }
  
  const setError = () => {
    return <p>Incorrect Credentials</p>
  }

  return (
    <Form onSubmit={handleLogin}>
      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Username" value={username} onChange={({target}) => setUsername(target.value)} required/>
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={({target}) => setPassword(target.value)} required/>
      </Form.Group>

        {errorVisibility === true ? setError()  
        : null}

        <button type="submit">submit</button>
  </Form>
  )
}

export default LoginForm
