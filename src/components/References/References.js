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
  h2 {
    font-size: 2.2rem;
    font-family: ff-market-web;
    font-weight: 700;
    line-height: 1.2;
    display: block;
    width: 70%;
    @media (min-width: 768px) {
      font-size: 3.5rem;
      width: 40%;
    }
    @media (min-width: 1280px) {
      font-size: 4rem;
    }
    @media (min-width: 1920px) {
      font-size: 5rem;
    }
  }
`

const References = () => {
  return (
    <StyledWrapper>
      <h2>Testimonials</h2>
      <ReferencesCarousel />
    </StyledWrapper>
  )
}

export default References
