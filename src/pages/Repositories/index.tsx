import * as React from 'react'

import { RepositoryProvider } from 'contexts/RepositoryContext'

import Filters from './components/Filters'
import List from './components/List'
import * as S from './styles'

const Repositories: React.FC = () => (
  <RepositoryProvider>
    <S.Wrapper>
      <Filters />
      <List />
    </S.Wrapper>
  </RepositoryProvider>
)

export default Repositories
