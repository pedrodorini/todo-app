import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router'

import Home from '@pages/Home'

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </main>
  )
}

export default App
