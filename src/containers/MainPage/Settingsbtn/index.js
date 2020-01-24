import React from 'react'
import { StyledMenu, Button, ButtonSmall } from './styles'
import GreetingOptions from './GreetingSettings'
import SearchOptions from './SearchSettings'
import CurrentWeather from './CurrentWeather'
import WidgetLocation from './WidgetLocation'

const Settingsbtn = ({
  preferences, setPreferences, update, setOrientation,
}) => (
  <StyledMenu>
    <Button type="button">Settings</Button>
    <div>
      <GreetingOptions check={preferences.greeting} setPreferences={setPreferences} />
      <SearchOptions check={preferences.searchBar} setPreferences={setPreferences} />
      <CurrentWeather check={preferences.weatherCur} setPreferences={setPreferences} />
      <WidgetLocation setOrientation={setOrientation} />
      <ButtonSmall type="button" onClick={update}>Set Preferences</ButtonSmall>
    </div>
  </StyledMenu>
)


export default Settingsbtn
