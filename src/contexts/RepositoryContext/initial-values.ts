export interface RepositoryState {
  filters: {
    topic: string
    language: string
  }
}

const initialValues: RepositoryState = {
  filters: {
    topic: '',
    language: ''
  }
}

export default initialValues
