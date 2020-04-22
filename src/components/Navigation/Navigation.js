import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import { injectIntl, Link } from 'gatsby-plugin-intl'

import MobileMenuDrawerButton from './MobileMenuDrawer/MobileMenuDrawerButton'

const NavigationWrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 1rem;
  font-family: 'Montserrat';
  color: #384f47;
  z-index: 22;
  position: absolute;
  top: 0;
  left: 0;
  @media (min-width: 768px) {
    padding: 0 2.75rem;
    background-color: transparent;
  }
  @media (min-width: 1280px) {
    padding: 0 7rem;
  }
  @media (min-width: 1920px) {
    padding: 0 12rem;
  }
`

const NavigationList = styled.ul`
  display: none;
  list-style: none;
  @media (min-width: 768px) {
    display: flex;
    padding-top: 1rem;
  }
`

const NavigationListItem = styled.li`
  padding: 0 1.25rem 1.25rem 1.25rem;
  font-size: 1rem;
  a {
    color: inherit;
    text-decoration: none;
    font-weight: 700;
    position: relative;
    @media (min-width: 1920px) {
      font-size: 1.25rem;
    }
  }
`

const LogoImage = styled(Image)`
  width: 50px;
  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
    width: 60px;
  }
  @media (min-width: 1920px) {
    width: 70px;
  }
`

const query = graphql`
  {
    allFile(filter: { name: { regex: "/logo/" } }) {
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

const Navigation = props => {
  const iconsData = useStaticQuery(query)

  return (
    <NavigationWrapper>
      <Link to="/" exact="true">
        <LogoImage
          fluid={iconsData.allFile.edges[0].node.childImageSharp.fluid}
        />
      </Link>
      <MobileMenuDrawerButton click={props.mobileMenuDrawerClickHandler} />
      <NavigationList>
        <NavigationListItem>
          <Link to="/" activeClassName="linkActive">
            {props.intl.formatMessage({ id: 'MENU.home' })}
          </Link>
        </NavigationListItem>
        <NavigationListItem>
          <Link to="#about" activeClassName="linkActive">
            {props.intl.formatMessage({ id: 'MENU.about' })}
          </Link>
        </NavigationListItem>
        <NavigationListItem>
          <Link to="#portfolio" activeClassName="linkActive">
            {props.intl.formatMessage({ id: 'MENU.portfolio' })}
          </Link>
        </NavigationListItem>
        <NavigationListItem>
          <Link to="#contact" activeClassName="linkActive">
            {props.intl.formatMessage({ id: 'MENU.contact' })}
          </Link>
        </NavigationListItem>
      </NavigationList>
    </NavigationWrapper>
  )
}

export default injectIntl(Navigation)
