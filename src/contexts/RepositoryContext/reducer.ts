import { RepositoryState } from './initial-values'

const ACTIONS = {
  SET_FILTERS: 'SET_FILTERS'
}

export interface RepositoryAction {
  type: keyof typeof ACTIONS
  payload: any
}

const reducer = (state: RepositoryState, action: RepositoryAction) => {
  const handlers = {
    [ACTIONS.SET_FILTERS]: () => ({
      ...state,
      filters: { ...state.filters, ...action.payload }
    })
  }

  return handlers[action.type]()
}

export default reducer
