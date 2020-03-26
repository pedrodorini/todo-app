import React, { useEffect, useState, Fragment } from 'react'
import { Formik, Form, Field } from 'formik'

import Loading from '@components/Loading'
import Todo from '@components/Todo'

import { getTodos, addTodo } from '@services/todos'

import './index.css'

const Todos = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getAllTodos()
  }, [])

  const getAllTodos = async () => {
    setLoading(true)

    const results = await getTodos()

    setTodos(results || [])
    setLoading(false)
  }

  const handleSubmitTodo = async ({ description }) => {
    setLoading(true)

    const success = await addTodo(description)

    if (success) getAllTodos()
  }

  return (
    <div className="todos-container">
      <h2 className="todos-header">Afazeres</h2>
      <Formik initialValues={{ description: '' }} onSubmit={handleSubmitTodo}>
        {({ handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit} className="todos-input-container">
            <Field
              name="description"
              placeholder="Digite aqui sua tarefa"
              className="todos-input"
              value={values.description}
              onChange={handleChange}
            />
            <button type="submit" className="todos-button">
              Adicionar
            </button>
          </Form>
        )}
      </Formik>
      {todos?.length > 0 && !loading ? (
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
            {todos.map((todo) => (
              <Todo key={todo._id} todo={todo} />
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
