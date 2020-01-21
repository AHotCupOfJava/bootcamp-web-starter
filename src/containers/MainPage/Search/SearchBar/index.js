import React from 'react'
import { Container } from './styles'


const SearchBar = () => (
  <Container>
    <form method="get" action="http://www.google.com/search">


      <input
        type="text"
        name="q"
        size="25"
        maxLength="255"
        value="Google site search"
        onFocus="if(this.value==this.defaultValue)this.value=''; this.style.color='black';"
        onBlur="if(this.value=='')this.value=this.defaultValue; "
      />
      <input type="submit" value="Go!" />
      <input type="hidden" name="sitesearch" value="yoursite.com" />


    </form>
  </Container>
)

export default SearchBar
