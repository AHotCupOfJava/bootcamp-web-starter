import React from 'react'
import { StyledMenu, Button } from './styles'
import GreetingOptions from './GreetingSettings'
import SearchOptions from './SearchSettings'
import WallpaperOptions from './WallpaperSettings'

const Settingsbtn = ({ preferences, setPreferences }) => (
  <StyledMenu>
    <Button type="button">Settings</Button>
    <div>
      <GreetingOptions check={preferences.greeting} setPreferences={setPreferences} />
      <SearchOptions check={preferences.searchBar} setPreferences={setPreferences} />
      <WallpaperOptions check={preferences.weatherCur} setPreferences={setPreferences} />
    </div>
  </StyledMenu>
)


export default Settingsbtn
