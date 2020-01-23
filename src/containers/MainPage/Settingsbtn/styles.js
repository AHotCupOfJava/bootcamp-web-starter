import styled from 'styled-components'

export const StyledMenu = styled.div`
    width: auto;
    display: flex;
    justify-content: center;
    padding: 15px;
    div {
        display: none;
    }

    &:hover div{
        display: block;
    }
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
        background: ${({ theme }) => theme.colors.hovered};
        color:#FFFFFF;
    }
`

export const ButtonSmall = styled.button`
    width: 100px;
    height: 20px;
    font-size: ${({ theme }) => theme.fonts.body.smaller};
    text-align: center;
    background: transparent;
    background-color: #FFFFFF;
    border-radius: 3px;
    border: 2px solid #FFFFFF;
    margin: 5px;
    color: ${({ theme }) => theme.colors.link};

    &:hover {
        background: ${({ theme }) => theme.colors.hovered};
        color:#FFFFFF;
    }
`
