import React from 'react'
import styled from 'styled-components'

import ImageSlide from '../ImageSlide/ImageSlide'

const HeroSliderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  z-index: -1;
`

const HeroSlider = props => {
  return (
    <>
      <HeroSliderWrapper>
        <ImageSlide />
      </HeroSliderWrapper>
    </>
  )
}

export default HeroSlider
