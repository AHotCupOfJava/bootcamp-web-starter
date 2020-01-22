import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
    height: 100vh;
    display: inline-flex;
    align-items: center;
    flex-direction: column;
    font-family: 'Trebuchet MS';
    background-color: ${({ theme }) => theme.colors.link};
    display: flex;
  justify-content: center;
  align-items: center;
`
export const Text = styled.p`
  text-indent: 25px;
  margin: 10px;
  width: 500px;
  color: navy;
`

export const img = styled.img`
    pointer-events: none;
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: -1;
`
