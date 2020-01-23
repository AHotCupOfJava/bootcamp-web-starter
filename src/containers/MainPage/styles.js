import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Trebuchet MS';
  background-color: ${({ theme }) => theme.colors.link};
`

export const Page = styled.div`
  width: 100vw;
    height: 100vh;
    font-family: 'Trebuchet MS';
    background-color: ${({ theme }) => theme.colors.link};
`

export const TopBarWrapper = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: space-between;
`
