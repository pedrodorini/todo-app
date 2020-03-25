import React, { useEffect, useState } from 'react'

import { getTodos } from '@services/todos'

const Todos = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getAllTodos()
  }, [])

  const getAllTodos = async () => {
    const results = await getTodos()

    setTodos(results || [])
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
    </div>
  )
}

export default Todos
