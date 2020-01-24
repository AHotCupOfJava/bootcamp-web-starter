import React from 'react'
import { useApolloClient } from '@apollo/react-hooks'
import { StyledLink, Button } from './styles'

const LogOutLink = () => {
  const client = useApolloClient()

  const handleLogOut = () => {
    localStorage.removeItem('token')
    client.resetStore()
  }

  return (
    <StyledLink to="/">
      <Button type="button" onClick={handleLogOut}>
      Log Out
      </Button>
    </StyledLink>
  )
}


export default LogOutLink
