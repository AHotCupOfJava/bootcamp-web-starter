import React, { useState, useEffect } from 'react'
import { Container, Text } from './styles'
import LoginLink from '../components/LoginLink'
import RegisterLink from '../components/RegisterLink'


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

  return (
    <Container>
      <h1>Welcome!</h1>
      <Text>
        This is a website where you can customize your own New Tab page.
        The background changes according to the weather in your current location,
        and you can choose which widgets you want to turn on and off.
      </Text>
      <LoginLink />
      <RegisterLink />
      {weather
        ? (
          <p>
            City:
            {' '}
            {weather.name}
            {' '}
            Weather:
            {' '}
            {weather.weather[0].description}
          </p>
        )
        : <p>Your weather data is loading...</p>}
    </Container>
  )
}


export default Welcome
