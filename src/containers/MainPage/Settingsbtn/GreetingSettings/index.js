import React from 'react'
import { OpContainer } from './styles'


const GreetingOptions = () => (
  <OpContainer>
    <input type="checkbox" defaultChecked={false} id="greeting" />
    <label htmlFor="greeting">Greeting</label>
  </OpContainer>

)


export default GreetingOptions
