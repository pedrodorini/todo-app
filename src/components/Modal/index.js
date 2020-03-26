import React from 'react'

import Close from '@icons/Close'

import './index.css'

const Modal = ({ children, title, onClose }) => {
  return (
    <div className="modal-pane">
      <div className="modal-wrapper">
        <div className="modal-header-container">
          <div className="modal-header-wrapper">
            <p>{title}</p>
          </div>
          <div className="modal-icon-wrapper" onClick={onClose}>
            <Close />
          </div>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  )
}

export default Modal
