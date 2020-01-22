import React, { useReducer } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import { REGISTER } from '../graphql'
import {
  Container, Header, TextBar, Button,
} from './styles'

const Register = () => {
  const history = useHistory()
  const formReducer = (prevState, payload) => ({ ...prevState, ...payload })

  const [form, setForm] = useReducer(formReducer,
    {
      email: '', username: '', password: '', firstName: '', lastName: '',
    })

  const [register, {
    loading, error,
  }] = useMutation(REGISTER, {
    variables: {
      input: form,
    },
    onCompleted: ({ register: { token } }) => {
      localStorage.setItem('token', token)
      history.push('/home')
    },
  })

  if (error) return `Error: ${error}`
  if (loading) return 'Loading...'

  return (
    <div>
      <Container>
        <Header>Register</Header>

        <br />

        <TextBar
          type="text"
          placeholder="Email"
          name="email"
          onChange={e => setForm({ [e.target.name]: e.target.value })}
        />
        <br />
        <TextBar
          type="text"
          placeholder="Username"
          name="username"
          onChange={e => setForm({ [e.target.name]: e.target.value })}
        />

        <br />
        <TextBar
          type="password"
          placeholder="Password"
          name="password"
          onChange={e => setForm({ [e.target.name]: e.target.value })}
        />

        <br />
        <TextBar
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={e => setForm({ [e.target.name]: e.target.value })}
        />
        <br />
        <TextBar
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={e => setForm({ [e.target.name]: e.target.value })}
        />

        <br />
        <Button type="button" onClick={register}>
          Add User
        </Button>
      </Container>
    </div>
  )
}


export default Register
