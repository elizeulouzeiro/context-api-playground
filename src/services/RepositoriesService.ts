import api from '.'

import {
  SearchRepositoriesParams,
  SearchRepositoriesPureResponse
} from 'models/repositories.model'
import {
  createSearchRespositoriesPayload,
  parseSearchRepositoriesResponse
} from 'helpers/RepositoryHelpers'

export const searchRepositories = async (params: SearchRepositoriesParams) => {
  try {
    const { data } = await api.get<SearchRepositoriesPureResponse>(
      '/search/repositories',
      {
        params: createSearchRespositoriesPayload(params)
      }
    )

    return parseSearchRepositoriesResponse(data)
  } catch (error) {
    throw error
  }
}
