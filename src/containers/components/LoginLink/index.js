import React from 'react'
import FancyButton, { StyledLink } from './styles'


const LoginLink = () => (
  <StyledLink to="/login">
    <FancyButton type="button">
    Login
    </FancyButton>
  </StyledLink>
)


export default LoginLink
