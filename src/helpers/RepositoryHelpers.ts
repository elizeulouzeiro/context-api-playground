import {
  Repository,
  SearchRepositoriesParams,
  SearchRepositoriesPureResponse,
  SearchRepositoriesResponse,
  SearchRespositoriesPayload,
  SearchRepositoriesQuery
} from 'models/repositories.model'
import languages from 'pages/Repositories/utils/languages'

export const createSearchRespositoriesPayload = (
  params: SearchRepositoriesParams
): SearchRespositoriesPayload => {
  return {
    q: params.q,
    page: params.page,
    per_page: params.perPage
  }
}

export const parseSearchRepositoriesResponse = (
  response: SearchRepositoriesPureResponse
): SearchRepositoriesResponse => {
  return {
    totalItems: response.total_count,
    repositories: response.items?.map(
      (item): Repository => ({
        id: item.id,
        forks: item.forks,
        name: item.name,
        url: item.html_url,
        language: item?.language,
        owner: item.owner.login,
        stars: item.stargazers_count,
        license: item?.license?.name,
        description: item?.description
      })
    )
  }
}

export const createSearchQuery = (params: SearchRepositoriesQuery) => {
  return Object.entries(params).reduce(
    (query, [key, value]) => (value ? `${key}:${value}+${query}` : query),
    'is:public'
  )
}

export const getLanguageColor = (language?: string) => {
  if (!language) return ''

  return languages.find(
    item => item.name.toLowerCase() === language.toLowerCase()
  )?.color
}
