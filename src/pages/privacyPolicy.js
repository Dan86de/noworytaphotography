import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  padding: 1rem;
  @media (min-width: 768px) {
    padding: 0 2.75rem;
    margin-top: 4rem;
  }
  @media (min-width: 1280px) {
    padding: 0 7rem;
  }
  @media (min-width: 1920px) {
    padding: 0 12rem;
  }
`

const PrivacyPolicy = ({ intl }) => {
  return (
    <StyledWrapper>
      <h2>{intl.formatMessage({ id: 'PRIVACYPOLICY.PrivacyPolicy' })}</h2>
      <p>{intl.formatMessage({ id: 'PRIVACYPOLICY.PrivacyPolicyDetail' })}</p>
      <h3>{intl.formatMessage({ id: 'PRIVACYPOLICY.Definition' })}</h3>
      <p>{intl.formatMessage({ id: 'PRIVACYPOLICY.DefinitionDetail' })}</p>
      <h3>{intl.formatMessage({ id: 'PRIVACYPOLICY.PersonalData' })}</h3>
      <p>{intl.formatMessage({ id: 'PRIVACYPOLICY.PersonalDataDetail' })}</p>
      <h3>{intl.formatMessage({ id: 'PRIVACYPOLICY.Cookies' })}</h3>
      <p>{intl.formatMessage({ id: 'PRIVACYPOLICY.CookiesDetails' })}</p>
      <h3>{intl.formatMessage({ id: 'PRIVACYPOLICY.ServerLogs' })}</h3>
      <p>{intl.formatMessage({ id: 'PRIVACYPOLICY.ServerLogsDetails' })}</p>
      <h3>{intl.formatMessage({ id: 'PRIVACYPOLICY.InformationUpdate' })}</h3>
      <p>
        {intl.formatMessage({ id: 'PRIVACYPOLICY.InformationUpdateDetails' })}
      </p>
    </StyledWrapper>
  )
}

export default injectIntl(PrivacyPolicy)
