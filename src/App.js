import React, { useEffect } from 'react';
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
  const [routes, setRoutes] = useRoutes('pages')
  
  const loadRoutes = () => {
    setRoutes({ available: Object.values(pages) })
  }
  useEffect(() => loadRoutes(), [])

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
