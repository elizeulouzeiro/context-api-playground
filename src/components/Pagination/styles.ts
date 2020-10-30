import styled, { css } from 'styled-components'

interface PageProps {
  isSelected: boolean
}

interface ActionProps {
  isVisible: boolean
}

export const Wrapper = styled.section`
  margin-top: 48px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 12px;
  }
`

export const Page = styled.button<PageProps>`
  align-items: center;
  background-color: var(--white);
  border-radius: var(--border-radius);
  border: 1px solid var(--gh-gray-1);
  color: var(--gh-black-1);
  cursor: pointer;
  display: flex;
  font-size: 14px;
  height: 32px;
  justify-content: center;
  outline: none;
  width: 32px;

  &:hover {
    background-color: var(--gh-gray-3);
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: var(--gh-black-2);
      border: none;
      color: var(--white);

      &:hover {
        background-color: var(--gh-black-1);
      }
    `}
`

export const Control = styled.button<ActionProps>`
  align-items: center;
  background-color: transparent;
  border-radius: var(--border-radius);
  border: none;
  color: var(--gh-black-1);
  cursor: pointer;
  display: flex;
  height: 32px;
  justify-content: center;
  outline: none;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  width: 32px;

  svg {
    fill: var(--gh-black-1);
  }

  &:hover {
    background-color: var(--gh-gray-1);
  }
`
