import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import { LOGIN } from '../graphql'
import {
  Container, Button, TextBar, Header, Text, Anchor,
} from './styles'

const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setError] = useState('')

  const [login, {
    loading, error,
  }] = useMutation(LOGIN, {
    variables: {
      email,
      password,
    },
    onCompleted: ({ login: { token } }) => {
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
        <Header>Log in</Header>

        <br />
        <TextBar type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <br />
        <TextBar
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <Button type="button" onClick={login}>Log in</Button>

        {loading ? <Text>Loading...</Text> : <></>}
        {error ? (
          <Text>{errorMessage}</Text>
        ) : <></>}

        <Text>
          Need an account?
          {' '}
          <Anchor href="http://localhost:3000/register">Register</Anchor>
        </Text>
      </Container>
    </div>
  )
}

export default Login
