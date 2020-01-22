import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
    height: 100vh;
    display: inline-flex;
    align-items: center;
    flex-direction: column;
    font-family: 'Trebuchet MS';
    background-color: ${({ theme }) => theme.colors.link};
`
