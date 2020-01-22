import React from 'react'
import { OpContainer } from './styles'

const SearchOptions = ({ check, setPreferences }) => (
  <OpContainer>

    <label htmlFor="search">
      <input type="checkbox" name="searchBar" defaultChecked={check} id="search" onClick={e => setPreferences({ [e.target.name]: e.target.checked })} />
      Search
    </label>

  </OpContainer>
)


export default SearchOptions
