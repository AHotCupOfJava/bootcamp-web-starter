import React from 'react'
import { OpContainer } from './styles'


const WallpaperOptions = ({ check, setPreferences }) => (
  <OpContainer>
    <input type="checkbox" name="weatherCur" defaultChecked={check} id="greeting" onClick={e => setPreferences({ [e.target.name]: e.target.checked })} />
    <label htmlFor="wallpaper">Wallpaper</label>
  </OpContainer>
)


export default WallpaperOptions
