import React, { useEffect } from 'react'

import { useRepositories } from 'contexts/RepositoryContext'
import { searchRepositories } from 'services/RepositoriesService'

import * as S from './styles'
import {
  SearchRepositoriesParams,
  SearchRepositoriesResponse
} from 'models/repositories.model'
import { createSearchQuery } from 'helpers/RepositoryHelpers'

import Repository from '../Repository'

const List: React.FC = () => {
  const { state, dispatch } = useRepositories()

  const fetchRepositories = () => {
    dispatch({ type: 'SET_LOADING' })

    const query = createSearchQuery({
      topic: state.filters.topic,
      language: state.filters.language
    })

    const params: SearchRepositoriesParams = {
      q: query,
      page: state.filters.page,
      perPage: state.filters.perPage
    }

    searchRepositories(params).then((result: SearchRepositoriesResponse) => {
      dispatch({ type: 'SET_REPOSITORIES', payload: result.repositories })
    })
  }

  useEffect(() => {
    if (state.refetch) {
      fetchRepositories()
    }
  }, [state.refetch])

  return (
    <S.Wrapper>
      {state.repositories?.map(repository => (
        <Repository key={repository.id} {...repository} />
      ))}
    </S.Wrapper>
  )
}

export default List
