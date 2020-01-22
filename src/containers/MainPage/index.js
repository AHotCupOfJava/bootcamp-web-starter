import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import SearchBar from './Search'
import SettingsBtn from './Settingsbtn'
import LogOutLink from './LogOut'
import UserGreeting from './UserGreeting'
import GET_VIEWER from './graphql'
import { Container } from './styles'

const MainPage = () => {
  const { loading, error, data } = useQuery(GET_VIEWER)

  if (error) {
    return `Error: ${error}`
  }
  if (loading) {
    return 'Loading...'
  }

  return (
    <Container>
      <LogOutLink />
      <UserGreeting name="Johhny" />
      <SearchBar />
      <SettingsBtn />

    </Container>
  )
}

export default MainPage
