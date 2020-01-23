import React from 'react'
import { OpContainer } from './styles'


const GreetingOptions = ({ check, setPreferences }) => (
  <OpContainer>
    <input type="checkbox" name="greeting" defaultChecked={check} id="greeting" onClick={e => setPreferences({ [e.target.name]: e.target.checked })} />
    <label htmlFor="greeting">Greeting</label>
  </OpContainer>
)


export default GreetingOptions
