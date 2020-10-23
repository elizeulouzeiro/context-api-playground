import * as React from 'react'

import { RepositoryProvider } from 'contexts/RepositoryContext'

import Filters from './components/Filters'
import * as S from './styles'

const Home: React.FC = () => (
  <RepositoryProvider>
    <S.Wrapper>
      <Filters />
    </S.Wrapper>
  </RepositoryProvider>
)

export default Home
