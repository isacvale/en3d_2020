import React, { useEffect, useCallback } from 'react';
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
import useRoutes from './stores/useRoutes'
import * as pages from './pages/config'


function App() {
  const setRoutes = useRoutes('pages')[1]
  const memoSetRoutes = useCallback(setRoutes, [1])
  
  useEffect(() => {
    memoSetRoutes({ available: Object.values(pages) })
  }, [memoSetRoutes])

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
  );
}

export default App;
