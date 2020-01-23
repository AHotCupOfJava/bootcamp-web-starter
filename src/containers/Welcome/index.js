import React, { useState, useEffect } from 'react'
import {
  Container, Image, WelcomeDiv, Text,
} from './styles'
import LoginLink from '../components/LoginLink'
import RegisterLink from '../components/RegisterLink'
import { Header } from '../Login/styles'

const Welcome = () => {
  const [fade, setFade] = useState(false)

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
        <Text>
        This is a build-your-own homepage where you can add and remove features to your liking.
        You can login or register below!
        </Text>
        <LoginLink />
        <RegisterLink />
      </WelcomeDiv>
    </Container>
  )
}


export default Welcome
