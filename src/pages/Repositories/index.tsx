import * as React from 'react'

import RepositoryContext, {
  RepositoryProvider
} from 'contexts/RepositoryContext'

import Filters from './components/Filters'
import List from './components/List'
import Pagination from './components/Pagination'
import * as S from './styles'

const Repositories: React.FC = () => (
  <RepositoryProvider>
    <S.Wrapper>
      <Filters />
      <List />
      <RepositoryContext.Consumer>
        {({ state }) => state.totalItems > 0 && <Pagination />}
      </RepositoryContext.Consumer>
    </S.Wrapper>
  </RepositoryProvider>
)

export default Repositories
