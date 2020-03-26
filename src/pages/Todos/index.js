import React, { useEffect, useState } from 'react'

import Loading from '@components/Loading'

import { getTodos } from '@services/todos'

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

  return (
    <div>
      {todos?.length > 0 ? (
        todos.map(({ _id, description }) => (
          <div key={_id}>
            <p>{description}</p>
          </div>
        ))
      ) : (
        <p>Parece que você ainda não tem nada para fazer</p>
      )}
      {loading && <Loading />}
    </div>
  )
}

export default Todos
