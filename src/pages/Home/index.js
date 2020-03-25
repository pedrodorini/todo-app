import React from 'react'

import './index.css'

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-header">Bem-vindo ao To do App!</h1>
      <a href="todos" className="home-button">
        Começar
      </a>
    </div>
  )
}

export default Home
