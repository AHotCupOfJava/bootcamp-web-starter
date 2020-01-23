import React, { useState, useEffect } from 'react'
import Flickr from 'flickr-sdk'
import {
  Container, Image, WelcomeDiv, Text,
} from './styles'
import LoginLink from '../components/LoginLink'
import RegisterLink from '../components/RegisterLink'
import { Header } from '../Login/styles'

const Welcome = () => {
  const [fade, setFade] = useState(false)
  const flickr = new Flickr('4f9c1a03cd916127c332df8c7bb5f877')
  const [weather, setWeather] = useState()
  const [image, setImage] = useState()

  useEffect(() => {
    setTimeout(() => setFade(true), 500)
  }, [])

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
        })
        console.log(data.main.temp)
        console.log(data.weather[0].description)
        if (imgLibrary.body.photos.photo[0].url_c) {
          setImage(imgLibrary.body.photos.photo[0].url_c)
        } else {
          setImage('https://cdn.wallpapersafari.com/64/53/DI52GS.jpg')
        }
      }, () => alert('Failed to fetch weather data.'))
    }
  }, [weather])
  useEffect(() => {
    setTimeout(() => setFade(true), 500)
  }, [])

  return (
    <Container>
      <Image
        src="https://cdn.wallpapersafari.com/64/53/DI52GS.jpg"
        alt="weather"
        fade={fade}
      />
      <WelcomeDiv fade={fade}>
        <Header>Introducing Your Dream Page!</Header>
        <p style={{
          margin: '10px 30px', textAlign: 'center', fontSize: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center',
        }}
        >
This is a build-your-own homepage where you can add and remove features to your liking. You can login or register below!
        </p>
        <LoginLink />
        <RegisterLink />
      </WelcomeDiv>

    </Container>
  )
}


export default Welcome
