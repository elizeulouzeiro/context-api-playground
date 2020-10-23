import styled from 'styled-components'

export const Form = styled.form`
  display: flex;

  & > *:not(:last-child) {
    margin-right: 16px;
  }
`

export const Input = styled.input`
  border-radius: var(--border-radius);
  border: 1px solid var(--gh-gray-1);
  outline: none;
  padding: 16px 24px;
  width: 100%;

  &:focus {
    border-color: var(--gh-blue-1);
    box-shadow: 0 0 0 3px var(--gh-blue-2);
  }
`

export const Button = styled.button`
  background-color: var(--gh-green-3);
  border-radius: var(--border-radius);
  border: none;
  color: var(--white);
  cursor: pointer;
  outline: none;
  padding: 16px 24px;

  &:hover {
    background-color: var(--gh-green-2);
  }
`

export const Select = styled.select`
  border-radius: var(--border-radius);
  border: 1px solid var(--gh-gray-1);
  outline: none;
  padding: 16px 24px;
  min-width: 256px;

  &:focus {
    border-color: var(--gh-blue-1);
    box-shadow: 0 0 0 3px var(--gh-blue-2);
  }
`
