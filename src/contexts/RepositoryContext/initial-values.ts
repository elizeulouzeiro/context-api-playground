import { Repository } from 'models/repositories.model'

export interface RepositoryState {
  filters: {
    topic: string
    language: string
    page: number
    perPage: number
  }
  totalItems: number
  repositories: Repository[]
  isLoading: boolean
  refetch: boolean
}

const initialValues: RepositoryState = {
  filters: {
    topic: '',
    language: '',
    page: 1,
    perPage: 9
  },
  totalItems: 0,
  repositories: [],
  isLoading: true,
  refetch: true
}

export default initialValues
