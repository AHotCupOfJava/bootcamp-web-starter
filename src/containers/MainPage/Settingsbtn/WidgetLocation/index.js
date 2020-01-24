import React from 'react'
import Select from 'react-select'


const WidgetLocation = ({ orientation, setOrientation }) => {
  const options = [
    { value: 'flex-start', label: 'Top' },
    { value: 'center', label: 'Center' },
    { value: 'flex-end', label: 'Bottom' },
  ]
  const changeOrientation = val => {
    setOrientation(val.value)
  }

  return (
    <Select options={options} onChange={changeOrientation} />)
}


export default WidgetLocation
