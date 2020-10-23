import { RepositoriesState } from 'models/repositories.model'

const ACTIONS = {
  SET_FILTERS: 'SET_FILTERS'
}

export interface IAction {
  type: keyof typeof ACTIONS
  payload: object | string | number
}

const reducer = (state: RepositoriesState, action: IAction) => {
  const handlers = {
    [ACTIONS.SET_FILTERS]: () => ({
      ...state,
      filters: {
        ...state.filters,
        ...(action.payload as object)
      }
    })
  }

  return handlers[action.type]()
}

export default reducer
