import React, { useReducer } from 'react'
import { useQuery } from '@apollo/react-hooks'
import SearchBar from './Search'
import SettingsBtn from './Settingsbtn'
import LogOutLink from './LogOut'
import UserGreeting from './UserGreeting'
import GET_VIEWER from './graphql'
import { Container, Page, LogOutWrapper } from './styles'

const formReducer = (prevState, payload) => ({ ...prevState, ...payload })

const MainPage = () => {
  const [preferences, setPreferences] = useReducer(
    formReducer, { searchBar: true, weatherCur: true, greeting: true },
  )

  const { loading, error, data } = useQuery(GET_VIEWER, {
    onCompleted: ({ getViewer }) => setPreferences(
      {
        searchBar: getViewer.prefs.searchBar,
        weatherCur: getViewer.prefs.weatherCur,
        greeting: getViewer.prefs.greeting,
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
    <Page>
      <LogOutWrapper>
        <LogOutLink />
      </LogOutWrapper>
      <Container>
        {preferences.greeting ? (
          <UserGreeting name={data.getViewer.firstName} />) : (null)}
        {preferences.searchBar ? (
          <SearchBar />) : null}
        <SettingsBtn preferences={data.getViewer.prefs} setPreferences={setPreferences} />
      </Container>
    </Page>
  )
}

export default MainPage
