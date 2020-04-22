import React from 'react'
import styled from 'styled-components'

import { injectIntl } from 'gatsby-plugin-intl'

const LangChooseWrapper = styled.div`
  display: flex;
  color: #384f47;
  font-size: 1rem;
  a {
    text-decoration: none;
    color: #384f47;
    font-size: 0.8rem;
    padding: 1rem;
    font-weight: 700;
  }
`

const Language = props => {
  return (
    <LangChooseWrapper>
      <a href="/en">EN</a>
      <a href="/pl">PL</a>
      <a href="/de">DE</a>
    </LangChooseWrapper>
  )
}

export default injectIntl(Language)
