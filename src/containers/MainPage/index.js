import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import SearchBar from './Search'
import SettingsBtn from './Settingsbtn'
import LogOutLink from './LogOut'
import UserGreeting from './UserGreeting'
import GET_VIEWER from './graphql'

const MainPage = () => {
  const { loading, error, data } = useQuery(GET_VIEWER)
  return (
    <div>
      <LogOutLink />
      <UserGreeting name="Johhny" />
      <SearchBar />
      <SettingsBtn />
    </div>
  )
}

export default MainPage
