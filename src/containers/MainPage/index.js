import React, { useReducer } from 'react'
import { useQuery } from '@apollo/react-hooks'
import SearchBar from './Search'
import SettingsBtn from './Settingsbtn'
import LogOutLink from './LogOut'
import UserGreeting from './UserGreeting'
import GET_VIEWER from './graphql'
import { Container } from './styles'

const formReducer = (prevState, payload) => ({ ...prevState, ...payload })

const MainPage = () => {
  const [preferences, setPreferences] = useReducer(
    formReducer, { searchBar: true, weatherCur: true, greeting: true },
  )
  const { loading, error } = useQuery(GET_VIEWER, {
    onCompleted: ({ getViewer }) => setPreferences(
      {
        searchBar: getViewer.searchBar,
        weatherCur: getViewer.weatherCur,
        greeting: getViewer.greeting,
      },
    ),
  })


  if (error) {
    return `${error}`
  }
  if (loading) {
    return 'Loading...'
  }

  return (
    <Container>
      <LogOutLink />
      {preferences.greeting ? (
        <UserGreeting name={data.getViewer.firstName} />) : (null)}
      {preferences.searchBar ? (
        <SearchBar />) : null}
      <SettingsBtn preferences={preferences} setPreferences={setPreferences} />
    </Container>
  )
}

export default MainPage
