import React, { createContext, Dispatch, useContext, useReducer } from 'react'

import initialValues, { RepositoryState } from './initial-values'
import reducer, { RepositoryAction } from './reducer'

interface RepositoryContextProps {
  state: RepositoryState
  dispatch: Dispatch<RepositoryAction>
}

const RepositoryContext = createContext({} as RepositoryContextProps)

export const RepositoryProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues)

  return (
    <RepositoryContext.Provider value={{ state, dispatch }}>
      {children}
    </RepositoryContext.Provider>
  )
}

export const useRepositories = () => useContext(RepositoryContext)
