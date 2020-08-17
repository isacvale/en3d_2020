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
import useDesign from './stores/useDesign'
import * as pages from './pages/config'

const getDesignStore = () => {
  const height = window.innerHeight
  const width = window.innerWidth
  const orientation = height > width ? 'portrait' : 'landscape'
  const layout = width >= 1400
      ? 'desktop'
      : width >= 1100
          ? 'laptop'
          : width >= 500
              ? 'tablet'
              : 'mobile'
  const design = {
    height,
    orientation,
    layout,
    width,
  }
  return design
}

const getScrollArea = () => {
  const scroll = Math.round(window.scrollY)

  return scroll < 60
    ? 'header'
    : 'body'
}

const setUpDesignStore = (setDesign, design) => {
  window.addEventListener('resize', () => {
    const store = {...getDesignStore()}
    setDesign(store)
  })
  window.addEventListener('scroll', () => {
    const store = { scrollSegment: getScrollArea()}
    setDesign(store)
  })
}

function App() {
  const setRoutes = useRoutes('pages')[1]
  const memoSetRoutes = useCallback(setRoutes, [1])
  const [design, setDesign] = useDesign('design')
  useEffect(() => {
    memoSetRoutes({ available: Object.values(pages) })
  }, [memoSetRoutes])

  useEffect(() => setUpDesignStore(setDesign, design), [setDesign, design])

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
