import styled from 'styled-components'
import Select from 'react-select'


export const StyledSelect = styled(Select)`
  width: 120px;
  height: 20px;
  font-size: 10px;
  text-align: center;
  background-color: #FFFFFF;
  border-radius: 3px;
  border: 2px solid #FFFFFF;
  margin: 15px;
  color: ${({ theme }) => theme.colors.link};
`
