import React, { useState, useEffect, useRef, Fragment } from 'react'
import classNames from 'classnames'

import MenuDot from '@icons/MenuDotVertical'
import Pencil from '@icons/Pencil'
import RecicleBin from '@icons/RecicleBin'

import './index.css'

const DropdownButton = () => {
  const [visible, setVisible] = useState(false)
  const button = useRef(null)
  const container = useRef(null)
  const mobile = window.innerWidth < 800
  const containerClasses = classNames({
    'dropdown-container-options': visible,
    'dropdown-container-options-hidden': !visible,
  })

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  })

  const handleClick = (e) => {
    if (
      container?.current?.contains(e.target) ||
      button?.current?.contains(e.target)
    ) {
      return
    }

    visible && setVisible(false)
  }

  return (
    <div className="dropdown-container">
      <button
        type="button"
        className="dropdown-button"
        ref={button}
        onClick={() => setVisible(!visible)}
      >
        <MenuDot horizontal={mobile} />
      </button>
      <div className={containerClasses} ref={container}>
        {visible && (
          <Fragment>
            <div className="dropdown-container-option">
              <Pencil />
              <p>Editar</p>
            </div>
            <div className="dropdown-container-option">
              <RecicleBin />
              <p>Excluir</p>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  )
}

export default DropdownButton
