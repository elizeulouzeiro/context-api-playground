import styled, { css } from 'styled-components'

export const Form = styled.form`
  display: flex;

  & > *:not(:last-child) {
    margin-right: 16px;
  }
`

const fieldStyles = css`
  border-radius: var(--border-radius);
  border: 1px solid var(--gh-gray-1);
  outline: none;
  padding: 16px;

  &:focus {
    border-color: var(--gh-blue-1);
    box-shadow: 0 0 0 3px var(--gh-blue-2);
  }
`

export const Input = styled.input.attrs({ autoComplete: 'off' })`
  ${fieldStyles}

  width: 100%;
`

export const Select = styled.select`
  ${fieldStyles}

  min-width: 256px;
`

export const Button = styled.button`
  background-color: var(--gh-green-3);
  border-radius: var(--border-radius);
  border: none;
  color: var(--white);
  cursor: pointer;
  padding: 16px;

  &:hover {
    background-color: var(--gh-green-2);
  }
`
