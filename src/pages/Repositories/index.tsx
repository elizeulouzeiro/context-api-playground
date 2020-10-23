import * as React from 'react'

import { RepositoriesProvider } from 'contexts/RepositoriesContext'

import Filters from './components/Filters'
import * as S from './styles'

const Repositories: React.FC = () => (
  <RepositoriesProvider>
    <S.Wrapper>
      <Filters />
    </S.Wrapper>
  </RepositoriesProvider>
)

export default Repositories
