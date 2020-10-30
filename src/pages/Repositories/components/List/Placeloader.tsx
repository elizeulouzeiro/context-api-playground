import * as React from 'react'
import styled from 'styled-components'

import ContentLoader from 'react-content-loader'

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Card = () => (
  <ContentLoader width={300} foregroundColor="#e1e4e8">
    <rect x="0" y="0" rx="50%" ry="50%" width="16" height="16" />
    <rect x="24" y="0" rx="2" ry="2" width="150" height="16" />
    <rect x="0" y="28" rx="2" ry="2" width="250" height="16" />
    <rect x="0" y="48" rx="2" ry="2" width="200" height="16" />
  </ContentLoader>
)

const Loader = () => (
  <LoaderWrapper>
    <Card />
    <Card />
    <Card />
  </LoaderWrapper>
)

const Placeloader = () => (
  <>
    <Loader />
    <Loader />
    <Loader />
  </>
)

export default Placeloader
