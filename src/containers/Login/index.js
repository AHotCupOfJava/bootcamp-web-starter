import React, { useState } from 'react'
<<<<<<< HEAD

=======
>>>>>>> 44805d6144f32d1a7a38415b4bf1de016a5ac2be
import { useMutation } from '@apollo/react-hooks'
import { LOGIN } from '../graphql'
import {
  Container, Button, TextBar, Header,
} from './styles'

const Login = () => {
<<<<<<< HEAD
=======
  const history = useHistory()
>>>>>>> 44805d6144f32d1a7a38415b4bf1de016a5ac2be
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


<<<<<<< HEAD
  if (loading) { return <p> Loading ... </p> }
=======
  if (loading) return <p> Loading ... </p>
>>>>>>> 44805d6144f32d1a7a38415b4bf1de016a5ac2be
  if (error) {
    return (<p>Error</p>)
  }
  // apply font change

  return (
    <div>
      <Container>
<<<<<<< HEAD
        <Header>Log in</Header>

=======
        <h1>Log in</h1>
>>>>>>> 44805d6144f32d1a7a38415b4bf1de016a5ac2be
        <br />
        <TextBar type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <br />
<<<<<<< HEAD
        <TextBar
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
=======
        <TextBar type="text" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
>>>>>>> 44805d6144f32d1a7a38415b4bf1de016a5ac2be
        <br />
        <Button type="button" onClick={login}>Log in</Button>
        <p>Need an account? Register</p>
      </Container>
      {called ? <p>{data.login.user.email}</p> : <p>NOT CALLED</p>}
    </div>
  )
}

export default Login
