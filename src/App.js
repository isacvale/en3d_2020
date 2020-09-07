import React from 'react';
import { observer } from 'mobx-react'
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'
import {
  Home,
  Page404
 } from './pages'

import store from 'stores/store'

store.inicializarStore()

const App = observer(() => {

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route>
            <Page404 />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
})

export default App
