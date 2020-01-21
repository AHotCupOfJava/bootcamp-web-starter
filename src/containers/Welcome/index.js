import React from 'react'
import { Container } from './styles'
import LoginLink from '../components/LoginLink'
import RegisterLink from '../components/RegisterLink'


const Welcome = () => (
  <Container>
    <h1>Welcome to Your Dream Page!</h1>
    <LoginLink />
    <RegisterLink />

  </Container>
)


export default Welcome
