import React from 'react'
import { OpContainer } from './styles'

const SearchOptions = ({ check, setPreferences }) => (
  <OpContainer>

    <input type="checkbox" name="searchBar" defaultChecked={check} id="greeting" onClick={e => setPreferences({ [e.target.name]: e.target.checked })} />
    <label htmlFor="search">Search</label>

  </OpContainer>
)


export default SearchOptions
