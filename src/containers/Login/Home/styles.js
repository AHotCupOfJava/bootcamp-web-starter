import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
`

export const Button = styled.button`
    width: 100px;
    height: 30px;
    font-size: ${({ theme }) => theme.fonts.body.larger};
    text-align: center;
    background: transparent;
    background-color: #FFFFFF;
    border-radius: 3px;
    border: 2px solid #FFFFFF;
    margin: 5px;
    color: ${({ theme }) => theme.colors.link};

    &:hover {
        background: #9473c6;
        color:#FFFFFF;
    }


`
