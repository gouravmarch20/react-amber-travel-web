import { useState, useReducer } from 'react'
import ModelContext from '../contexts/ModelContext'
import ModelReducer from '../reducers/ModelReducer'
const ModelProvider = props => {
  const [state, dispatch] = useReducer(ModelReducer, {
    modelStatus: false,
    current: ''
  })
  return (
    <ModelContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {props.children}
    </ModelContext.Provider>
  )
}
export default ModelProvider
