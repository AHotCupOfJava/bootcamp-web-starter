import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  
`
export const Text = styled.p`
  text-indent: 25px;
  margin: 10px;
  width: 100px;
  color: navy;
`

export const Image = styled.img`
    object-fit: cover;
    width: 150%;
    height: 100%;
    z-index: -1;
    opacity: ${({ fade }) => (fade ? '1' : '0.5')};
    transition: opacity 4s;
`

export const WelcomeDiv = styled.div`
    outline: 3px solid black;
    position: absolute;
    top: ${({ fade }) => (fade ? '25%' : '0%')};
    left: 25%;
    background-color: #73C6B6;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 750px;
    opacity: ${({ fade }) => (fade ? '1' : '0')};
    transition: opacity 3s, top 3s;
    &:hover {
        left: ${({ xCoord }) => xCoord}
    }
`
export const tempButton = styled.button`
    position: absolute;
    width: 100px;
    height: 100px;
    top: 50%;
    left: 50%;
    margin: -50px 0 0 -50px;
    background: #CB4B16;
    border-radius: 80%;
    backface-visibility: hidden;
`
