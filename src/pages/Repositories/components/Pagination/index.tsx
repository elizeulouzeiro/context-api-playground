import * as React from 'react'

import PaginationComponent from 'components/Pagination'
import { useRepositories } from 'contexts/RepositoryContext'

const Pagination = () => {
  const { state, dispatch } = useRepositories()

  return (
    <PaginationComponent
      page={state.filters.page}
      perPage={state.filters.perPage}
      totalItems={state.totalItems}
      onChangePage={page =>
        dispatch({ type: 'SET_FILTERS', payload: { page } })
      }
    />
  )
}

export default Pagination
