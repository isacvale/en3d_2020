import React from 'react';
import { observer } from 'mobx-react'
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'
import {
  Home,
  Login,
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

          <Route exact path='/login'>
            <Login />
          </Route>

          <Route>
            <Page404 />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
})

// const PrivateRoute = ({ children, ...args }) =>
//   <Route
//     {...args}
//     render={ props =>
//       netlifyIdentity.isAuthenticated
//         ? props.children
//         : <Redirect to={{
//             pathname: '/login',
//             state: { from: props.location }
//           }}
//         />
//     }
//   />


export default App
