import React from 'react'

import { ClipLoader } from 'react-spinners'

import './index.css'

const Loading = () => {
  return (
    <div className="loading-pane">
      <ClipLoader size={60} color="#777777" loading />
    </div>
  )
}

export default Loading
