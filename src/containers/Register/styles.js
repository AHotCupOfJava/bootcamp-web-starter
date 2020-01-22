import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: ${({ theme }) => theme.fonts.header.fontfamily};
    background-color: ${({ theme }) => theme.colors.link};
    
 `
export const Header = styled.h1`
 font-family: ${({ theme }) => theme.fonts.header.family};
 `
export const Button = styled.button`
    width: 21%;
    height: 40px;
    font-size: ${({ theme }) => theme.fonts.body.larger};
    text-align: center;
    background: transparent;
    background-color: #FFFFFF;
    border-radius: 3px;
    border: 2px solid #FFFFFF;
    margin: 0 1em;
    color: ${({ theme }) => theme.colors.link};
    padding: 0.25em 1em;

    &:hover {
        background: ${({ theme }) => theme.colors.hovered};
        color:#FFFFFF;
    }
`
export const TextBar = styled.input`
    width: 20%;
  height: 40px;
  vertical-align: middle;
  border-radius: 3px;
  border: 2px solid ${({ theme }) => theme.colors.static};
  position: relative;
  padding: 0 5px;
  background-color: ${({ theme }) => theme.colors.static};
  transition: 0.3s all;
  ::placeholder{
    &.hide-on-focus:focus {
    &::-webkit-input-placeholder {
      color: white;
    }
  }}
  &:focus {
    background-color: #FFFFFF;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  color: #000000;
    }
`
