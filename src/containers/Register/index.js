import React, { useState, useReducer } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import { REGISTER } from '../graphql'
import Home from './Home'
import {
  Container, Header, TextBar, Button, Text, TopBarWrapper,
} from './styles'

const Register = () => {
  const history = useHistory()
  const formReducer = (prevState, payload) => ({ ...prevState, ...payload })

  const [errorMessage, setError] = useState('')

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
    onError: (({ graphQLErrors }) => {
      if (graphQLErrors) {
        setError(graphQLErrors[0].message)
      }
    }),
  })

  return (
    <div>
      <Container>

        <TopBarWrapper>
          <Home />
        </TopBarWrapper>

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

        {loading ? <Text>Loading...</Text> : <></>}
        {error ? <Text>{errorMessage}</Text> : <></>}

      </Container>
    </div>
  )
}


export default Register
