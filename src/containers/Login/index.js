import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import { LOGIN } from '../graphql'
import {
  Container, Button, TextBar, Header,
} from './styles'

const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
  })

  if (loading) return <p> Loading ... </p>
  if (error) {
    return (<p>Error</p>)
  }
  // apply font change

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
        <p>
          Need an account?
          <a href="http://localhost:3000/register">Register</a>
        </p>
      </Container>
    </div>
  )
}

export default Login
