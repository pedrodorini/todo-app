import React from 'react'

import Checkbox from '@icons/Checkbox'

import './index.css'

const CheckboxComponent = ({
  name = null,
  checked = false,
  onClick = null,
  onChange = null,
  label,
}) => {
  return (
    <div
      className="checkbox-container"
      onClick={onChange ? () => onChange(name) : onClick}
    >
      <Checkbox checked={checked} />
      <label className="checkbox-label">{label}</label>
    </div>
  )
}

export default CheckboxComponent
