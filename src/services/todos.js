import Http from '@services/http'

import { showToast } from '@services/toast'

export const getTodos = async () => {
  let results = null

  try {
    const response = await Http.get('todos')

    if (response?.status === 200 && response?.data) results = response.data
  } catch (err) {
    console.error(err)
  }

  return results
}

export const addTodo = async description => {
  let success = false

  try {
    const response = await Http.post('todos', { description, done: false })

    if (response?.status === 201) {
      success = true
      showToast('Tarefa criada com sucesso')
    }
  } catch (err) {
    console.error(err)
    showToast('Ocorreu um erro ao criar sua tarefa', 'failure')
  }

  return success
}

export const editTodo = async ({ id, description, done }) => {
  let success = false

  try {
    const response = await Http.put(`todos/${id}`, { description, done })

    if (response?.status === 200) {
      success = true
      showToast('Tarefa alterada com sucesso')
    }
  } catch (err) {
    console.error(err)
    showToast('Ocorreu um erro ao alterar sua tarefa', 'failure')
  }

  return success
}

export const removeTodo = async id => {
  let success = false

  try {
    const response = await Http.delete(`todos/${id}`)

    if (response?.status === 204) {
      success = true
      showToast('Tarefa removida com sucesso')
    }
  } catch (err) {
    console.error(err)
    showToast('Ocorreu um erro ao remover sua tarefa', 'failure')
  }

  return success
}
