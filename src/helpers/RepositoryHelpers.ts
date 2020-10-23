import {
  Repository,
  SearchRepositoriesParams,
  SearchRepositoriesPureResponse,
  SearchRepositoriesResponse,
  SearchRespositoriesPayload
} from 'models/repositories.model'

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
        license: item.license?.name
      })
    )
  }
}
