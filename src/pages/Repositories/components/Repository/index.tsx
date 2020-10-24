import * as React from 'react'

import { GitForkIcon, StarIcon, RepoIcon } from '@primer/octicons-react'

import { Repository as RepositoryProps } from 'models/repositories.model'
import { getLanguageColor } from 'helpers/RepositoryHelpers'

import * as S from './styles'
import { truncateLongString } from 'helpers/StringHelpers'

const Repository: React.FC<RepositoryProps> = ({
  owner,
  name,
  url,
  description,
  language,
  stars,
  forks
}) => (
  <S.Wrapper>
    <S.ItemWrapper>
      <RepoIcon />
      <S.Link title={name} href={url} target="_blank">
        <S.User>{owner}</S.User>/<S.Project>{name}</S.Project>
      </S.Link>
    </S.ItemWrapper>
    <S.Info>
      <S.Description isVisible={!!description}>
        {description && truncateLongString(description!)}
      </S.Description>
      <S.Details>
        {language && (
          <S.ItemWrapper>
            <S.Color color={getLanguageColor(language)} />
            <S.Text>{language}</S.Text>
          </S.ItemWrapper>
        )}
        {stars && (
          <S.ItemWrapper>
            <StarIcon />
            <S.Text>{stars}</S.Text>
          </S.ItemWrapper>
        )}
        {forks && (
          <S.ItemWrapper>
            <GitForkIcon />
            <S.Text>{forks}</S.Text>
          </S.ItemWrapper>
        )}
      </S.Details>
    </S.Info>
  </S.Wrapper>
)

export default Repository
