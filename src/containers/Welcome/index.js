import React, { useState, useEffect } from 'react'
import Flickr from 'flickr-sdk'
import { assertCompositeType } from 'graphql'
import { Container, img } from './styles'
import LoginLink from '../components/LoginLink'
import RegisterLink from '../components/RegisterLink'


const Welcome = () => {
  const flickr = new Flickr('4f9c1a03cd916127c332df8c7bb5f877')
  const [weather, setWeather] = useState()
  const [image, setImage] = useState()
  useEffect(() => {
    if (!weather) {
      navigator.geolocation.getCurrentPosition(async ({ coords }) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=db5bbba816b58757082ce2230c7754a6&units=imperial`)
        const data = await response.json()
        setWeather(data)
        const imgLibrary = await flickr.photos.search({
          text: `${data.weather[0].description} background`,
          extras: ['url_c', 'description'],
          per_page: 1,
          sort: 'relevance',
          tags: 'background wallpaper',
        })
        console.log(imgLibrary)
        console.log(data.weather[0].description)
        if (imgLibrary.body.photos.photo[0].url_c) {
          setImage(imgLibrary.body.photos.photo[0].url_c)
        } else {
          setImage('https://cdn.wallpapersafari.com/64/53/DI52GS.jpg')
        }

        // eslint-disable-next-line no-alert
        /* {weather ? (
          <p>
City:
            {weather.name}
            {' '}
Weather:
            {weather.weather[0].description}
          </p>

        ) : <p>Your weather data is loading...</p>} */
      }, () => alert('Failed to fetch weather data.'))
    }
  }, [weather])

  return (
    <Container style={{ height: window.innerHeight }}>
      <img
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          width: window.innerWidth,
          height: window.innerHeight,
          zIndex: -1,
        }}
        src={image}
        alt="weather"
      />
      <div style={{
        backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: '50px', width: '500px',
      }}
      >
        <h1>Introducing Your Dream Page!</h1>
        <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>This is a build-your-own homepage where you can add and remove features to your liking. You can login or register below!</p>
        <LoginLink />
        <RegisterLink />
      </div>

    </Container>
  )
}


export default Welcome
