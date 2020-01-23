import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)``

export const Button = styled.button`
    width: 100px;
    height: 40px;
    font-size: ${({ theme }) => theme.fonts.body.larger};
    text-align: center;
    background: transparent;
    background-color: #FFFFFF;
    border-radius: 3px;
    border: 2px solid #FFFFFF;
    margin: 5px;
    color: ${({ theme }) => theme.colors.link};
    padding: 0.25em 1em;

    &:hover {
        background: ${({ theme }) => theme.colors.hovered};
        color:#FFFFFF;
    }


`
