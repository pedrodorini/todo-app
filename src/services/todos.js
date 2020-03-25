import Http from '@services/http'

export const getTodos = async () => {
  let results = null

  try {
    const response = Http.getTodos('todos')

    if (response?.status === 200 && response?.data) results = response.data
  } catch (err) {
    console.error(err)
  }

  return results
}