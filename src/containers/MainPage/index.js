import React, { useReducer } from 'react'
import { useQuery } from '@apollo/react-hooks'
import SearchBar from './Search'
import SettingsBtn from './Settingsbtn'
import LogOutLink from './LogOut'
import UserGreeting from './UserGreeting'
import GET_VIEWER from './graphql'
import { Container } from './styles'


const MainPage = () => {
  const { loading, error, data } = useQuery(GET_VIEWER)

  const formReducer = (prevState, payload) => ({ ...prevState, ...payload })
  const [preferences, setPreferences] = useReducer(
    formReducer, { searchBar: true, weatherCur: true, greeting: true },
  )

  if (error) {
    return `${error}`
  }
  if (loading) {
    return 'Loading...'
  }

  const { sb, wc, g } = data.getViewer.preferences
  setPreferences({ searchBar: sb, weatherCur: wc, greeting: g })


  return (
    <Container>
      <LogOutLink />
      {preferences.greeting ? (
        <UserGreeting name="johnny" />) : (null)}
      {preferences.searchBar ? (
        <SearchBar />) : null}
      <SettingsBtn preferences={preferences} setPreferences={setPreferences} />
    </Container>
  )
}

export default MainPage
