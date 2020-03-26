import React, { useEffect, useState, Fragment } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

import Loading from '@components/Loading'
import Todo from '@components/Todo'
import Modal from '@components/Modal'
import Checkbox from '@components/Form/Checkbox'

import { getTodos, addTodo, editTodo, removeTodo } from '@services/todos'

import TodosContext from '@context/Todos'

import './index.css'

const AddSchema = Yup.object().shape({
  description: Yup.string().required('É preciso descrever a tarefa'),
})

const ModalTitles = {
  edit: 'Editar tarefa',
  remove: 'Excluir tarefa',
}

const ModalActions = { edit: 'edit', remove: 'remove' }

const Todos = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)
  const [modal, setModal] = useState('')
  const [toBeChanged, setToBeChanged] = useState(null)

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
    else setLoading(false)
  }

  const handleSubmitEditTodo = async values => {
    setLoading(true)

    const success = await editTodo({
      id: values._id || toBeChanged._id,
      ...values,
    })

    if (success) {
      getAllTodos()
      setModal('')
      setToBeChanged(null)
    } else {
      setLoading(false)
    }
  }

  const handleRemoveTodo = async () => {
    setLoading(true)

    const success = await removeTodo(toBeChanged?._id)

    if (success) {
      getAllTodos()
      setModal('')
      setToBeChanged(null)
    } else {
      setLoading(false)
    }
  }

  const renderModalContent = () => {
    if (modal === ModalActions.edit) {
      return (
        <Fragment>
          <Formik
            initialValues={{
              description: toBeChanged.description,
              done: toBeChanged.done,
            }}
            onSubmit={handleSubmitEditTodo}
            validationSchema={AddSchema}
          >
            {({
              handleChange,
              handleSubmit,
              values,
              errors,
              setFieldValue,
            }) => (
              <Form onSubmit={handleSubmit}>
                <div className="todos-input-wrapper">
                  <Field
                    name="description"
                    placeholder="Digite aqui sua tarefa"
                    className="todos-input"
                    value={values.description}
                    onChange={handleChange}
                  />
                  {errors.description && (
                    <p className="todos-input-error">{errors.description}</p>
                  )}
                </div>
                <div className="todos-field-wrapper">
                  <Checkbox
                    name="done"
                    label="Feito"
                    checked={values.done}
                    onChange={() => setFieldValue('done', !values.done)}
                  />
                </div>
                <div className="todos-button-container">
                  <button
                    type="submit"
                    className="todos-button todos-button-positive"
                  >
                    Salvar
                  </button>
                  <button
                    type="button"
                    className="todos-button todos-button-negative"
                    onClick={() => setModal('')}
                  >
                    Cancelar
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <p className="todos-text">Deseja realmente excluir essa tarefa?</p>
          <div className="todos-button-container">
            <button
              type="button"
              onClick={handleRemoveTodo}
              className="todos-button todos-button-positive"
            >
              Sim, tenho certeza
            </button>
            <button
              type="button"
              className="todos-button todos-button-negative"
              onClick={() => setModal('')}
            >
              Cancelar
            </button>
          </div>
        </Fragment>
      )
    }
  }

  return (
    <div className="todos-container">
      <h2 className="todos-header">Nova tarefa</h2>
      <Formik
        initialValues={{ description: '' }}
        validationSchema={AddSchema}
        onSubmit={handleSubmitTodo}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <Fragment>
            <Form onSubmit={handleSubmit} className="todos-input-container">
              <div className="todos-input-wrapper">
                <Field
                  name="description"
                  placeholder="Digite aqui sua tarefa"
                  className="todos-input"
                  value={values.description}
                  onChange={handleChange}
                />
                {errors.description && (
                  <p className="todos-input-error">{errors.description}</p>
                )}
              </div>
              <button type="submit" className="todos-button todos-button-add">
                Adicionar
              </button>
            </Form>
          </Fragment>
        )}
      </Formik>
      <h2 className="todos-header">Tarefas</h2>
      <TodosContext.Provider
        value={{
          modalActions: ModalActions,
          editTodo: handleSubmitEditTodo,
          setModal,
          setToBeChanged,
        }}
      >
        {todos?.length > 0 && !loading ? (
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
            {todos.map(todo => (
              <Todo key={todo._id} todo={todo} />
            ))}
          </div>
        ) : (
          <p>
            {loading
              ? 'Carregando...'
              : 'Parece que você ainda não tem nada para fazer'}
          </p>
        )}
      </TodosContext.Provider>
      {loading && <Loading />}
      {modal && (
        <Modal title={ModalTitles[modal]} onClose={() => setModal('')}>
          {renderModalContent()}
        </Modal>
      )}
    </div>
  )
}

export default Todos
