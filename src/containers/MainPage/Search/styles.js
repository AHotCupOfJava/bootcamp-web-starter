import styled from 'styled-components'

export const Container = styled.div`
  width: 350px;
  display: flex;
  justify-content: center;
`

export const Input = styled.input`
  width: 100px;
  height: 30px;
  vertical-align: middle;
  border-radius: 3px;
  border: 1px solid darkgray;
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

export const Submit = styled.input`
  width: 30px;
  height: 30px;
  margin-left: 5px;
  vertical-align: middle;
  border-radius: 3px;
  border: 1px solid darkgray;
  position: relative;
  background-color: ${({ theme }) => theme.colors.static};
  transition: 0.3s all;

  &:hover {
    background-color: #FFFFFF;
    color: black;
  }
`
