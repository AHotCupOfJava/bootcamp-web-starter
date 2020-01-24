import React from 'react'
import {
  StyledMenu, Button, ButtonSmall, Wrapper,
} from './styles'
import GreetingOptions from './GreetingSettings'
import SearchOptions from './SearchSettings'
import CurrentWeather from './CurrentWeather'
import WidgetLocation from './WidgetLocation'

const Settingsbtn = ({
  preferences, setPreferences, update,
}) => (
  <StyledMenu>
    <Button type="button">Settings</Button>
    <Wrapper>
      <GreetingOptions check={preferences.greeting} setPreferences={setPreferences} />
      <SearchOptions check={preferences.searchBar} setPreferences={setPreferences} />
      <CurrentWeather check={preferences.weatherCur} setPreferences={setPreferences} />
      <WidgetLocation setPreferences={setPreferences} />
      <ButtonSmall type="button" onClick={update}>Set Preferences</ButtonSmall>
    </Wrapper>
  </StyledMenu>
)


export default Settingsbtn
