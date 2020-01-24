import React from 'react'
import Select from 'react-select'


const options = [
  { value: 'chocolate', label: 'Top' },
  { value: 'strawberry', label: 'Center' },
  { value: 'vanilla', label: 'Bottom' },
]
const WidgetLocation = () => (
  <Select options={options} onChange={console.log('yeah!')} />
)


export default WidgetLocation
