import React from 'react'
import { render } from 'react-dom'
import { Router } from '@reach/router'
import Navigation from './Navigation'
import Dashboard from './Dashboard'
import Task from './Task'

const App = () => {
  return (
    <React.StrictMode>
      <div className="main-container container">
        <div className="columns">
          <Navigation />
          <div className="column">
            <Router>
              <Dashboard path="/" />
              <Task path="/task" />
            </Router>
          </div>
        </div>
      </div>
    </React.StrictMode>
  )
}

render(<App />, document.getElementById('root'))
