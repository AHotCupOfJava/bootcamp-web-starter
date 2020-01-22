import React, { useReducer } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { REGISTER } from '../graphql'
import {
  Container, Button, TextBar, Header,
} from './styles'


const Register = () => {
  const formReducer = (prevState, payload) => ({ ...prevState, ...payload })

  const [form, setForm] = useReducer(formReducer,
    {
      email: '', username: '', password: '', firstName: '', lastName: '',
    })

  const [register, {
    loading, error, data, called,
  }] = useMutation(REGISTER, {
    variables: {
      input: form,
    },
  })

  if (error) return `Error: ${error}`
  if (loading) return 'Loading...'
  if (called) {
    return 'called'
  }

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
        <Button
          type="button"
          onClick={register}
        >
Add User
        </Button>
      </Container>
      {called ? <p>{data.register.user.username}</p> : <p>Not called yet</p>}
    </div>
  )
}


export default Register
