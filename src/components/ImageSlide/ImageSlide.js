import React, { Component } from 'react'
import styled from 'styled-components'

import Img from 'gatsby-image'

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: red;
  z-index: -1;
`

class ImageSlide extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <>
        {console.log(this.props.images)}
        <ImageWrapper></ImageWrapper>
      </>
    )
  }
}

export default ImageSlide
