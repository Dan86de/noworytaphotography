import React from 'react'
import styled from 'styled-components'
import { injectIntl, Link } from 'gatsby-plugin-intl'

const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #384f47;
  color: white;
  text-align: center;
  font-size: 0.6rem;
  @media (min-width: 321px) {
    font-size: 0.8rem;
  }
  @media (min-width: 768px) {
    justify-content: flex-end;
    padding-right: 44px;
  }
`

const FooterTextWrapper = styled.p`
  padding: 0 1rem;
`

const PrivacyLink = styled(Link)`
  display: block;
  color: white;
  text-decoration: none;
  a {
    display: block;
  }
`

const Footer = ({ intl }) => {
  return (
    <FooterWrapper>
      <FooterTextWrapper>
        <PrivacyLink
          to="/privacyPolicy"
          style={{ textDecoration: 'none', width: '100%', display: 'flex' }}
        >
          {intl.formatMessage({ id: 'FOOTERSECTION.Privacy' })}{' '}
        </PrivacyLink>
        <strong>
          {intl.formatMessage({ id: 'FOOTERSECTION.Copyright' })}{' '}
          noworytaphotography.com
        </strong>
      </FooterTextWrapper>
    </FooterWrapper>
  )
}

export default injectIntl(Footer)
