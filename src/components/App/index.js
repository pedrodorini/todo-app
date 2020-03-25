import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router'

import Home from '@pages/Home'
import Todos from '@pages/Todos'

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/todos" component={Todos} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </main>
  )
}

export default App
