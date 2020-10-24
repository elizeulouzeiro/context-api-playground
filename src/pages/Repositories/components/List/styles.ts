import styled from 'styled-components'

export const Wrapper = styled.section`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  grid-template-rows: repeat(3, 1fr);
`
