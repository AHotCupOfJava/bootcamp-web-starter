import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { LOGIN } from '../graphql'

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

  })

  if (loading) return <p> Loading ... </p>
  if (error) return `Error: ${error}`


  return (
    <div>
      <p>Login Page</p>
      <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="text" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="button" onClick={login}>Login</button>
      {called ? <p>{data.login.user.email}</p> : <p>NOT CALLED</p>}
    </div>
  )
}

export default Login
