import React from 'react'
import { OpContainer } from './styles'


const CurrentWeather = ({ check, setPreferences }) => (
  <OpContainer>
    <label htmlFor="weatherCur">
      <input type="checkbox" name="weatherCur" defaultChecked={check} id="weatherCur" onClick={e => setPreferences({ [e.target.name]: e.target.checked })} />
        Current Weather
    </label>
  </OpContainer>
)


export default CurrentWeather
