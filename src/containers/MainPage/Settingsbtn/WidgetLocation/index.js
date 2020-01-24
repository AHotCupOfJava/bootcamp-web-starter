import React from 'react'
import { StyledSelect } from './styles'


const WidgetLocation = ({ setPreferences }) => {
  const options = [
    { value: 'FLEX_START', label: 'Top' },
    { value: 'CENTER', label: 'Center' },
    { value: 'FLEX_END', label: 'Bottom' },
  ]

  const customStyles = {
    option: (provided, state) => ({
      color: state.isSelected ? 'gray' : 'black',
      padding: 5,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1
      const transition = 'opacity 300ms'

      return { ...provided, opacity, transition }
    },
  }

  return (
    <StyledSelect options={options} styles={customStyles} placeholder="Widget alignment..." onChange={e => setPreferences({ orientation: e.value })} />)
}


export default WidgetLocation
