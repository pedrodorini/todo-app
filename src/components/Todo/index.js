import React from 'react'

import DropdownButton from '@components/DropdownButton'

const Todo = ({ todo }) => {
  const { description, createdAt, done } = todo
  const mobile = window.innerWidth < 800

  return (
    <div className="todos-table-row">
      <div className="todos-column">
        {mobile && <p className="todos-column-description">Tarefa:</p>}
        <p>{description}</p>
      </div>
      <div className="todos-column">
        {mobile && <p className="todos-column-description">Data de criação:</p>}
        <p>{new Date(createdAt)?.toLocaleDateString()}</p>
      </div>
      <div className="todos-column">
        {mobile && <p className="todos-column-description">Situação:</p>}
        <p>{done ? 'Feito' : 'A fazer'}</p>
      </div>
      <div className="todos-column">
        <DropdownButton />
      </div>
    </div>
  )
}

export default Todo
