import React, { createContext, useContext, useReducer, Dispatch } from 'react'

import { RepositoriesState } from 'models/repositories.model'

import initialValues from './initial-values'
import reducer, { IAction } from './reducer'

interface RepositoriesContextProps {
  state: RepositoriesState
  dispatch: Dispatch<IAction>
}

const RepositoriesContext = createContext({} as RepositoriesContextProps)

export const RepositoriesProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues)

  return (
    <RepositoriesContext.Provider value={{ state, dispatch }}>
      {children}
    </RepositoriesContext.Provider>
  )
}

export const useRepositories = () => useContext(RepositoriesContext)
