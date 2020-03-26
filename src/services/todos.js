import Http from '@services/http'

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

export const addTodo = async (description) => {
  let success = false

  try {
    const response = await Http.post('todos', { description, done: false })

    if (response?.status === 201) success = true
  } catch (err) {
    console.error(err)
  }

  return success
}
