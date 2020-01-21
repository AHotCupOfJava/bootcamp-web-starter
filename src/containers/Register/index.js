import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { REGISTER } from '../graphql'

const Register = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const [addUser] = useMutation(REGISTER, {
    variables: {
      input: {
        email,
        password: pass,
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
      <input placeholder="password" value={pass} onChange={e => setPass(e.target.value)} />
      <button type="button" onClick={addUser}>Add User</button>
    </div>
  )
}


export default Register
