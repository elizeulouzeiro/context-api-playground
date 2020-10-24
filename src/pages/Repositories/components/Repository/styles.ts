import styled from 'styled-components'

interface DescriptionProps {
  isVisible: boolean
}

interface ColorProps {
  color?: string
}

export const Wrapper = styled.article`
  background-color: var(--white);
  border-radius: var(--border-radius);
  border: 1px solid var(--gh-gray-1);
  display: flex;
  flex-direction: column;
  padding: 16px;
`

export const Link = styled.a`
  color: var(--gh-blue-1);
  cursor: pointer;
  word-break: break-all;

  &:hover {
    text-decoration: underline;
  }
`

export const User = styled.span`
  font-size: 14px;
`

export const Project = styled.span`
  font-size: 14px;
  font-weight: 700;
`

export const Description = styled.p<DescriptionProps>`
  color: var(--gh-black-3);
  font-size: 12px;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  word-break: break-all;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`

export const Details = styled.div`
  display: flex;

  & > *:not(:last-child) {
    margin-right: 16px;
  }
`

export const ItemWrapper = styled.div`
  align-items: center;
  display: flex;

  & > *:first-child {
    margin-right: 4px;
  }

  svg {
    fill: var(--gh-black-3);
  }
`

export const Color = styled.div<ColorProps>`
  background-color: ${({ color }) => color || 'var(--gh-green-3)'};
  border-radius: var(--border-radius);
  height: 12px;
  width: 12px;
`

export const Text = styled.span`
  font-size: 12px;
  color: var(--gh-black-3);
`
