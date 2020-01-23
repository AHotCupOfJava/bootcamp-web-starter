import React from 'react'
import { StyledMenu, Button } from './styles'
import GreetingOptions from './GreetingSettings'
import SearchOptions from './SearchSettings'
import WallpaperOptions from './WallpaperSettings'
import UpdatePreferences from './UpdatePreferences'

const Settingsbtn = ({ preferences, setPreferences }) => {
  console.log(preferences)
  console.log('G: ', preferences.greeting)
  console.log('Wp: ', preferences.weatherCur)
  return (
    <StyledMenu>
      <Button type="button">Settings</Button>
      <div>
        <GreetingOptions check={preferences.greeting} setPreferences={setPreferences} />
        <SearchOptions check={preferences.searchBar} setPreferences={setPreferences} />
        <WallpaperOptions check={preferences.weatherCur} setPreferences={setPreferences} />
        <UpdatePreferences />
      </div>
    </StyledMenu>
  )
}


export default Settingsbtn
