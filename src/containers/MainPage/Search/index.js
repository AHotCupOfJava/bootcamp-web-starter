import React from 'react'
import { Container } from './styles'


const SearchBar = () => (
  <Container>
    <form method="get" action="http://www.google.com/search">


      <input
        type="text"
        name="q"

      />
      <input type="submit" value="Go!" />


    </form>
  </Container>
)

export default SearchBar
