<<<<<<< HEAD
import React from 'react'
import { Container } from './styles'
=======
import React, { useState, useEffect } from 'react'
import {Container} from './styles'
>>>>>>> cdaf0b6... Peter's Weather API added
import LoginLink from '../components/LoginLink'
import RegisterLink from '../components/RegisterLink'


<<<<<<< HEAD
const Welcome = () => (
  <Container>
    <h1>Welcome to Your Dream Page!</h1>

    <p>
    place description here
    </p>

    <LoginLink />
    <RegisterLink />
=======
const Welcome = () => {
    const [weather, setWeather] = useState()
    useEffect(() => {
        if (!weather) {
          navigator.geolocation.getCurrentPosition(async ({ coords }) => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=db5bbba816b58757082ce2230c7754a6&units=imperial`)
            const data = await response.json()
            setWeather(data)
          // eslint-disable-next-line no-alert
          }, () => alert('Failed to fetch weather data.'))
        }
      }, [weather])

    return <Container>
        <h1>Welcome to Your Dream Page!</h1>
<p>Words!words?</p>
        <LoginLink />
        <RegisterLink />
        {weather ? <p>City: {weather.name} Weather: {weather.weather[0].description}</p> : <p>Your weather data is loading...</p>}
    </Container>
}
>>>>>>> cdaf0b6... Peter's Weather API added

  </Container>
)


export default Welcome
