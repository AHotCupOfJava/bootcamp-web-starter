import React from 'react'
import Select from 'react-select'


const WidgetLocation = ({ orientation, setOrientation }) => {
  const options = [
    { value: 'flex-start', label: 'Top' },
    { value: 'center', label: 'Center' },
    { value: 'flex-end', label: 'Bottom' },
  ]


  return (
    <Select options={options} onChange={({ value }) => setOrientation(value)} />)
}


export default WidgetLocation
