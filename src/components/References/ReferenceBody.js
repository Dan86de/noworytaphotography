import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

const StyledBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const StarIcon = styled(Image)`
  width: 25px;
  margin-right: 16px;
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
const query = graphql`
  {
    allFile(filter: { name: { regex: "/star/" } }) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(maxWidth: 80) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`

const ReferenceBody = ({ activeReference }) => {
  const StarData = useStaticQuery(query)
  const stars = []
  for (let i = 1; i <= activeReference.refStars; i++) {
    stars.push(
      <StarIcon
        id={i}
        key={i}
        fluid={StarData.allFile.edges[0].node.childImageSharp.fluid}
      />
    )
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
