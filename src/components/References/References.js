import React from 'react'
import styled from 'styled-components'

import ReferencesCarousel from './ReferencesCarousel'

const StyledWrapper = styled.div`
  width: 100%;
  padding: 0 1rem;
  @media (min-width: 768px) {
    flex-direction: row-reverse;
    padding: 0 2.75rem;
    flex-wrap: wrap;
  }
  @media (min-width: 1280px) {
    flex-direction: row;
    padding: 0 7rem;
  }
  @media (min-width: 1920px) {
    padding: 0 12rem;
  }
`

const References = () => {
  return (
    <StyledWrapper>
      <ReferencesCarousel />
    </StyledWrapper>
  )
}

export default References
