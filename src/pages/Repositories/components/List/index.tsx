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

import EmptyList from './EmptyList'
import Placeloader from './Placeloader'

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

    searchRepositories(params)
      .then((result: SearchRepositoriesResponse) => {
        dispatch({ type: 'SET_REPOSITORIES', payload: result.repositories })
        dispatch({ type: 'SET_TOTAL_ITEMS', payload: result.totalItems })
      })
      .catch(() => {
        dispatch({ type: 'SET_REPOSITORIES', payload: [] })
      })
  }

  useEffect(() => {
    if (state.refetch) {
      fetchRepositories()
    }
  }, [state.refetch])

  if (state.isLoading) return <Placeloader />
  if (state.repositories.length === 0) return <EmptyList />

  return (
    <S.Wrapper>
      {state.repositories?.map(repository => (
        <Repository key={repository.id} {...repository} />
      ))}
    </S.Wrapper>
  )
}

export default List
