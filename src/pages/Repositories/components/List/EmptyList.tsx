import * as React from 'react'

import { SearchIcon } from '@primer/octicons-react'
import styled from 'styled-components'

interface EmptyListProps {
  className?: string
}

const EmptyList: React.FC<EmptyListProps> = ({ className }) => (
  <article className={className}>
    <SearchIcon className={`${className}_icon`} size={32} />
    <h1 className={`${className}_message`}>
      We couldn’t find any repositories
    </h1>
  </article>
)

export default styled(EmptyList)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &_icon {
    fill: var(--gh-black-3);
  }

  &_message {
    color: var(--gh-black-1);
  }
`
