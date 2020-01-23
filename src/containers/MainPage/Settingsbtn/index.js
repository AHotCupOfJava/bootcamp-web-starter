import React from 'react'
import { StyledMenu } from './styles'
import GreetingOptions from './GreetingSettings'
import SearchOptions from './SearchSettings'
import WallpaperOptions from './WallpaperSettings'

const Settingsbtn = ({ preferences, setPreferences, update }) => (
  <StyledMenu>
    <button type="button">Settings</button>
    <div>
      <GreetingOptions check={preferences.greeting} setPreferences={setPreferences} />
      <SearchOptions check={preferences.searchBar} setPreferences={setPreferences} />
      <WallpaperOptions check={preferences.weatherCur} setPreferences={setPreferences} />
      <button type="button" onClick={update}>Set Preferences</button>
    </div>
  </StyledMenu>
)


export default Settingsbtn
