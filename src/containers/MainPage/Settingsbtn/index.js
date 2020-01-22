import React from 'react'
import { StyledMenu } from './styles'
import GreetingOptions from './GreetingSettings'
import SearchOptions from './SearchSettings'
import WallpaperOptions from './WallpaperSettings'

const Settingsbtn = () => (
  <StyledMenu>
    <button type="button">Settings</button>
    <div>
      <GreetingOptions />
      <SearchOptions />
      <WallpaperOptions />


    </div>
  </StyledMenu>
)


export default Settingsbtn
