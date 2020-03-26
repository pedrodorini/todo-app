import React from 'react'
import classNames from 'classnames'

import DropdownButton from '@components/DropdownButton'

import './index.css'

const Todo = ({ todo }) => {
  const { description, createdAt, done } = todo
  const mobile = window.innerWidth < 800
  const statusClasses = classNames({
    'todo-done': todo.done,
    'todo-pending': !todo.done,
  })

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
        <p className={statusClasses}>{done ? 'Feito' : 'A fazer'}</p>
      </div>
      <div className="todos-column">
        <DropdownButton todo={todo} />
      </div>
    </div>
  )
}

export default Todo
