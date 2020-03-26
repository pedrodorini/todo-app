import React, { useEffect, useState, Fragment } from 'react'

import Loading from '@components/Loading'

import { getTodos } from '@services/todos'

import './index.css'

const Todos = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)
  const mobile = window.innerWidth < 800

  useEffect(() => {
    getAllTodos()
  }, [])

  const getAllTodos = async () => {
    setLoading(true)

    const results = await getTodos()

    setTodos(results || [])
    setLoading(false)
  }

  return (
    <div className="todos-container">
      <h2 className="todos-header">Afazeres</h2>
      {todos?.length > 0 ? (
        <Fragment>
          <div className="todos-table">
            <div className="todos-table-row todos-table-row-header">
              <div className="todos-column todos-column-header">
                <p>Tarefa</p>
              </div>
              <div className="todos-column todos-column-header">
                <p>Data de criação</p>
              </div>
              <div className="todos-column todos-column-header">
                <p>Situação</p>
              </div>
              <div className="todos-column todos-column-header">
                <p>Ações</p>
              </div>
            </div>
            {todos.map(({ _id, description, createdAt, done }) => (
              <div className="todos-table-row" key={_id}>
                <div className="todos-column">
                  {mobile && <p>Tarefa</p>}
                  <p>{description}</p>
                </div>
                <div className="todos-column">
                  {mobile && <p>Data de criação</p>}
                  <p>{new Date(createdAt)?.toLocaleDateString()}</p>
                </div>
                <div className="todos-column">
                  {mobile && <p>Situação</p>}
                  <p>{done ? 'Feito' : 'A fazer'}</p>
                </div>
                <div className="todos-column">
                  <p>Ações</p>
                </div>
              </div>
            ))}
          </div>
        </Fragment>
      ) : (
        <p>
          {loading
            ? 'Carregando...'
            : 'Parece que você ainda não tem nada para fazer'}
        </p>
      )}

      {loading && <Loading />}
    </div>
  )
}

export default Todos
