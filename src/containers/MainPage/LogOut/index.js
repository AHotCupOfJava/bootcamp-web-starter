import React from 'react'
import { ApolloClient } from 'apollo-client'
import { StyledLink, Button } from './styles'


const LogOutLink = () => (

  <StyledLink to="/">
    <Button
      type="button"

    >
    Log Out
    </Button>
  </StyledLink>


)


export default LogOutLink
