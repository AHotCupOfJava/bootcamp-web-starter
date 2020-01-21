import React, { useReducer, useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { REGISTER } from '../graphql'

const Register = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [username, setUsername] = useState('')
  const formReducer = (prevState, payload) => ({ ...prevState, ...payload })

  const [form, setForm] = useReducer(formReducer,
    {
      title: '', language: '', numPages: 0, datePublished: '', bestseller: false, authorId: '', publisherId: '',
    })

  const [addUser] = useMutation(REGISTER, {
    variables: {
      input: {
        email: email,
        password: pass,
        username: username,
      },
    },
  })

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', margin: '20px',
    }}
    >
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>Register!</h1>
      <input placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="username" value={username} onChange={e => setUsername(e.target.value)} />
      <input placeholder="password" value={pass} onChange={e => setPass(e.target.value)} />
      <button type="button" onClick={addUser}>Add User</button>
    </div>
  )
}


export default Register
