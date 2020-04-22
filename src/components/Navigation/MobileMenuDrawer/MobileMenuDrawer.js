import React from 'react'
import styled from 'styled-components'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import LangChoose from '../../Language/Language'

const MobileMenuDrawerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 56;
  box-shadow: 0px 7px 7px rgba(0, 0, 0, 0 0.5);
  transition: transform 0.3s ease-out;
  ${props => {
    if (props.show) {
      return `transform: translateX(0%);`
    } else {
      return `transform: translateX(-100%);`
    }
  }}
`

const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NavigationListItem = styled.li`
  padding: 1rem;
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

const LangChooseWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const MobileMenuDrawer = props => {
  return (
    <MobileMenuDrawerWrapper show={props.show}>
      <NavigationList>
        <NavigationListItem onClick={props.linkClick}>
          <Link to="/" exact="true" activeClassName="linkActive">
            {props.intl.formatMessage({ id: 'MENU.home' })}
          </Link>
        </NavigationListItem>
        <NavigationListItem onClick={props.linkClick}>
          <Link to="#about" activeClassName="linkActive">
            {props.intl.formatMessage({ id: 'MENU.about' })}
          </Link>
        </NavigationListItem>
        <NavigationListItem onClick={props.linkClick}>
          <Link to="#portfolio" activeClassName="linkActive">
            {props.intl.formatMessage({ id: 'MENU.portfolio' })}
          </Link>
        </NavigationListItem>
        <NavigationListItem onClick={props.linkClick}>
          <Link to="#contact" activeClassName="linkActive">
            {props.intl.formatMessage({ id: 'MENU.contact' })}
          </Link>
        </NavigationListItem>
      </NavigationList>
      <LangChooseWrap>
        <LangChoose />
      </LangChooseWrap>
    </MobileMenuDrawerWrapper>
  )
}

export default injectIntl(MobileMenuDrawer)
