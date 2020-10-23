import api from '.'

import { SearchRepositoriesParams } from 'models/repositories.model'
import {
  createSearchRespositoriesPayload,
  parseSearchRepositoriesResponse
} from 'helpers/RepositoryHelpers'

export const searchRepositories = async (params: SearchRepositoriesParams) => {
  try {
    const { data } = await api.get('/search/repositories', {
      params: createSearchRespositoriesPayload(params)
    })

    return parseSearchRepositoriesResponse(data)
  } catch (error) {
    return new Error(error)
  }
}
