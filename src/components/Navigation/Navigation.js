import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

import { Link } from 'gatsby'

const NavigationWrapper = styled.nav`
  display: flex;
  color: #384f47;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  font-family: 'Montserrat';
  background-color: white;
`

const NavigationList = styled.ul`
  display: none;
  list-style: none;
  @media (min-width: 768px) {
    display: flex;
  }
`

const NavigationItem = styled.li`
  padding: 1.25rem;
  font-size: 1rem;
  a {
    color: inherit;
    text-decoration: none;
    font-weight: 700;
  }
`

const LogoImage = styled(Image)`
  width: 50px;
`

const HamburgerIcon = styled(Image)`
  width: 35px;
`

const query = graphql`
  {
    allFile(filter: { extension: { regex: "/(png)/" } }) {
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

const Navigation = () => {
  const iconsData = useStaticQuery(query)

  return (
    <NavigationWrapper>
      <LogoImage
        fluid={iconsData.allFile.edges[1].node.childImageSharp.fluid}
      />
      <HamburgerIcon
        fluid={iconsData.allFile.edges[0].node.childImageSharp.fluid}
      />
      <NavigationList>
        <NavigationItem>
          <Link to="/">Home</Link>
        </NavigationItem>
        <NavigationItem>
          <Link to="#about">About</Link>
        </NavigationItem>
        <NavigationItem>
          <Link to="/portfolio">Portfolio</Link>
        </NavigationItem>
        <NavigationItem>
          <Link to="#contact">Contact</Link>
        </NavigationItem>
      </NavigationList>
    </NavigationWrapper>
  )
}

export default Navigation
