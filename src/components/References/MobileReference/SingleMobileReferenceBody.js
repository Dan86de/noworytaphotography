import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  min-width: 100%;
`

const ReferenceBody = styled.div`
  h3 {
    margin: 0;
    font-size: 32px;
    font-family: ff-market-web;
    text-align: center;
  }
  span {
    display: block;
    width: 100%;
    text-align: center;
  }
  p {
    font-weight: 500;
  }
  @media (min-width: 768px) {
    h3 {
      font-size: 40px;
    }
  }
`

const ReferenceNavElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #4e625b;
  }
  h4 {
    margin: 0;
    margin-top: 1rem;
  }
  span {
    font-size: 10px;
    margin: 0;
  }
`

const SingleMobileReferenceBody = ({ reference }) => {
  const { id, refTitle, refBody, name, position } = reference
  return (
    <StyledWrapper key={id}>
      <ReferenceBody>
        <h3>{refTitle}</h3>
        <span>Stars: * * * * *</span>
        <p>{refBody}</p>
      </ReferenceBody>
      <ReferenceNavElement>
        <div></div>
        <h4>{name}</h4>
        <span>{position}</span>
      </ReferenceNavElement>
    </StyledWrapper>
  )
}

export default SingleMobileReferenceBody
