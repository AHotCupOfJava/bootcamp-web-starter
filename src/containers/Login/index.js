import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { LOGIN } from '../graphql'
import { Container, Button, TextBar } from './styles'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [login, {
    loading, data, error, called,
  }] = useMutation(LOGIN, {
    variables: {
      email,
      password,
    },
    onCompleted: ({ login: { token } }) => localStorage.setItem('token', token),
  })

  if (loading) return <p> Loading ... </p>
  if (error) {
    return (<p>Error</p>)
  }
  // apply font change

  return (
    <div>
      <Container>
        <h1>Log in</h1>
        <br />
        <TextBar type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <br />
        <TextBar type="text" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <br />
        <Button type="button" onClick={login}>Log in</Button>
        <p>Need an account? Register</p>
      </Container>
      {called ? <p>{data.login.user.email}</p> : <p>NOT CALLED</p>}
    </div>
  )
}

export default Login
