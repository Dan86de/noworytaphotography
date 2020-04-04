import React, { Component } from 'react'
import styled from 'styled-components'

const HeroSliderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: #d5d5d5;
  z-index: -1;
`

const HeroSliderImageWrapper = styled.div`
  min-height: 310px;
  background-color: #d5d5d5;
`

const HeroSliderTextWrapper = styled.div``

const HeroBigText = styled.h1`
  font-family: ff-market-web, sans-serif;
  font-weight: 700;
  font-style: normal;
`

class HeroSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <>
        <HeroSliderWrapper>
          <HeroSliderImageWrapper />
          <HeroSliderTextWrapper>
            <HeroBigText>Let me capture your Interior Passion</HeroBigText>
            <p>
              I love to see what other`s do with their living places and I want
              to show this in a best possible way.
            </p>
          </HeroSliderTextWrapper>
        </HeroSliderWrapper>
      </>
    )
  }
}

export default HeroSlider
