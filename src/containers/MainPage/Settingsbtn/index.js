import React from 'react'
import { StyledMenu, Button } from './styles'
import GreetingOptions from './GreetingSettings'
import SearchOptions from './SearchSettings'
import WallpaperOptions from './WallpaperSettings'

const Settingsbtn = ({ preferences, setPreferences }) => (
  <StyledMenu>
    <button type="button">Settings</button>
    <div>
      <GreetingOptions check={preferences.greeting} setPreferences={setPreferences} />
      <SearchOptions check={preferences.searchBar} setPreferences={setPreferences} />
      <WallpaperOptions check={preferences.weatherCur} setPreferences={setPreferences} />
    </div>
  </StyledMenu>
)


export default Settingsbtn
