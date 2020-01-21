import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import { LOGIN } from '../graphql'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [login, { loading, data, error, called }] = useMutation(LOGIN, {
        variables: {
            email: email,
            password: password,
        },
        
    })

    if (loading) return <p> Loading ... </p>
    if (error) return 'Error: ${error}'


    return(
        <div>
            <p>Login Page</p>
            <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="text" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="button" onClick={login}>Login</button>
            {called ? <p>{data.login}</p> : <p>NOT CALLED</p>}
        </div>
    )
}

export default Login