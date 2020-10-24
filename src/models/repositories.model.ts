export interface SearchRepositoriesParams {
  q?: string
  perPage?: number
  page?: number
}

export interface SearchRespositoriesPayload {
  q?: string
  per_page?: number
  page?: number
}

export interface SearchRepositoriesPureResponse {
  total_count: number
  items: [
    {
      id: number
      name: string
      owner: {
        login: string
      }
      html_url: string
      language?: string
      stargazers_count: number
      forks: number
      license?: {
        name: string
      }
      description?: string
    }
  ]
}

export interface SearchRepositoriesResponse {
  totalItems: number
  repositories: Repository[]
}

export interface Repository {
  forks: number
  name: string
  id: number
  language?: string
  owner: string
  stars: number
  url: string
  license?: string
  description?: string
}

export interface SearchRepositoriesQuery {
  topic?: string
  language?: string
}
