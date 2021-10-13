import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import React from 'react'
import Home from './pages/Home'
// contexts
import ModelContext from './context/contexts/ModelContext'
// provider
import ModelProvider from './context/providers/ModelProvider'

const App = () => {
  console.log(ModelContext)
  return (
    <div>
      <ModelProvider>
        <Home />
      </ModelProvider>
    </div>
  )
}

export default App
