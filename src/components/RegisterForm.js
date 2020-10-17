import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import {useDispatch} from 'react-redux'
import {registerUser} from '../reducers/userReducer'

const RegisterForm = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('')   
  const [password2, setPassword2] = useState('')   

  const handleRegister = async (event) => {
    event.preventDefault()
    if (password === password2) {
      dispatch(registerUser({username, password}))
    } else {
      alert('password does not match')
    }
    setUsername('')
    setPassword('')
    setPassword2('')
  }

  return (
    <Form onSubmit={handleRegister}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Optional Email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Username" value={username} onChange={({target}) => setUsername(target.value)}/>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={({target}) => setPassword(target.value)}/>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Retype Password</Form.Label>
        <Form.Control type="password" placeholder="Retype Password" value={password2} onChange={({target}) => setPassword2(target.value)}/>
      </Form.Group>

      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I Accept the terms and conditions" />
      </Form.Group>
      <button type='submit'>submit</button>
    </Form>       
  )


}

export default RegisterForm
