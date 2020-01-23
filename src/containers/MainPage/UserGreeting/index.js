import React from 'react'
import { StyledHeader } from './styles'


const UserGreeting = ({ name }) => (
  <StyledHeader>
Hello,
    {' '}
    {' '}
    {name}
  </StyledHeader>
)


export default UserGreeting
