import React from 'react'

// Component Import
import { Home } from './components/home/Home'

// Package Imports
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact='/' component={Home} />
      </Switch>
    </Router>
  )
}
