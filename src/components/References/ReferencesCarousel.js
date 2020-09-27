import React from 'react'
import styled from 'styled-components'

import CarouselList from './CarouselList'

const StyledCarouselWrapper = styled.div`
  width: 100%;
  display: flex;
`
const StyledCarouselListWrapper = styled.div`
  width: 50%;
  background-color: #a6b0ad;
`

const StyledCarouselBodyWrapper = styled.div`
  width: 50%;
  background-color: #64766f;
`

const ReferencesCarousel = () => {
  return (
    <StyledCarouselWrapper>
      <StyledCarouselListWrapper>
        <CarouselList />
      </StyledCarouselListWrapper>
      <StyledCarouselBodyWrapper>
        <p>Reference body</p>
      </StyledCarouselBodyWrapper>
    </StyledCarouselWrapper>
  )
}

export default ReferencesCarousel
