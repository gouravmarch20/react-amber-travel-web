import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import React from 'react'
import Home from './pages/Home'
// contexts
import ModelContext from './context/contexts/ModelContext'
const App = () => {
  console.log(ModelContext)
  return (
    <div>
      <Home />
    </div>
  )
}

export default App
