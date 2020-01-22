import React from 'react'
import { Container, Input, Submit } from './styles'


const SearchBar = () => (
  <Container>
    <form method="get" action="http://www.google.com/search">


      <Input
        type="text"
        name="q"
      />
      <Submit type="submit" value="Go!" />


    </form>
  </Container>
)

export default SearchBar
