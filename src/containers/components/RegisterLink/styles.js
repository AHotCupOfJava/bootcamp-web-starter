import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)``

export const FancyButton = styled.button`
    mix-blend-mode: lighten;
  color: black;
  background: white;
  border-color: black;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  height: 40px;
  font-weight: bold;
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.header.family};
  margin: 10px;
  &:hover {
      background: lightgrey;
        animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        perspective: 1000px;
    }

    @keyframes shake {
    10%, 90% {
        transform: translate3d(-1px, 0, 0);
    }
    
    20%, 80% {
        transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
        transform: translate3d(-4px, 0, 0);
    }

    40%, 60% {
        transform: translate3d(4px, 0, 0);
    }
    }
`

export default FancyButton
