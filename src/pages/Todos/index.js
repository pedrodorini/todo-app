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
      <p>Os to do logo estarão aqui</p>
    </div>
  )
}

export default Todos
