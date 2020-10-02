import React from 'react'
import styled from 'styled-components'
import StarIcon from './StarIcon'

const StyledBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const StarsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 30px;
`

const ReferenceTitle = styled.h3`
  font-family: ff-market-web;
  font-weight: 700;
  font-size: 64px;
  margin: 0;
`

const ReferenceParagraph = styled.p`
  margin-top: 50px;
`

const ReferenceBody = ({ activeReference }) => {
  const stars = []
  for (let i = 1; i <= activeReference.refStars; i++) {
    stars.push(<StarIcon id={i} key={i} />)
  }
  return (
    <StyledBodyWrapper>
      <ReferenceTitle>{activeReference.refTitle}</ReferenceTitle>
      <StarsWrapper>{stars}</StarsWrapper>

      <ReferenceParagraph>{activeReference.refBody}</ReferenceParagraph>
    </StyledBodyWrapper>
  )
}

export default ReferenceBody
