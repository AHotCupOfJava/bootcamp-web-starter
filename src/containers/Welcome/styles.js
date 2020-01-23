import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 50%;
  width: 100vw;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: absolute;
  top: 0px;
`

export const Text = styled.p`
  width: 400px;
  margin: 10px 30px;
  text-align: center;
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.header.family};
  display: flex;
  justify-content: center;
  align-items: center;
  `

export const Image = styled.img`
    position: absolute;
    top: 0px;
    right: 0px;
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: ${({ fade }) => (fade ? '1' : '0.5')};
    transition: opacity 4s;
`

export const WelcomeDiv = styled.div`
    outline: 1px solid black;
    position: absolute;
    top: ${({ fade }) => (fade ? '25%' : '0%')};
    background-color: #73C6B6;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    opacity: ${({ fade }) => (fade ? '1' : '0')};
    transition: opacity 3s, top 3s;
    padding: 20px;
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
