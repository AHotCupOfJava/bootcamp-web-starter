import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)``

export const FancyButton = styled.button`
  color: black;
  background: white;
  border-color: black;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  height: 40px;
  font-weight: bold;
  font-size: 20px;
  font-family: "Arial", Arial, Sans-serif;
  margin: 5px;
  &:hover {
    background: lightgrey;
  }
`

export default FancyButton
