import { isSwitchStatement } from 'typescript'
import { RepositoryState } from './initial-values'

const ACTIONS = {
  SET_FILTERS: 'SET_FILTERS',
  SET_REPOSITORIES: 'SET_REPOSITORIES',
  SET_LOADING: 'SET_LOADING',
  SET_TOTAL_ITEMS: 'SET_TOTAL_ITEMS'
}

export interface RepositoryAction {
  type: keyof typeof ACTIONS
  payload?: any
}

const reducer = (state: RepositoryState, action: RepositoryAction) => {
  const handlers = {
    [ACTIONS.SET_FILTERS]: (): RepositoryState => ({
      ...state,
      filters: { ...state.filters, ...action.payload },
      refetch: true
    }),
    [ACTIONS.SET_REPOSITORIES]: (): RepositoryState => ({
      ...state,
      repositories: action.payload,
      isLoading: false,
      refetch: false
    }),
    [ACTIONS.SET_TOTAL_ITEMS]: (): RepositoryState => ({
      ...state,
      totalItems: action.payload
    }),
    [ACTIONS.SET_LOADING]: (): RepositoryState => ({
      ...state,
      isLoading: true
    })
  }

  return handlers[action.type]()
}

export default reducer
