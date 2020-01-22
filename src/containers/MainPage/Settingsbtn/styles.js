import styled from 'styled-components'

export const StyledMenu = styled.div`
    width: 6vw
    button {
        width: 100%
    }
    div {
        display: none;
    }

    &:hover div{
        display: block;
    }
`
