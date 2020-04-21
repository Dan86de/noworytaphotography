import React from 'react'
import styled from 'styled-components'

const ToggleButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 25px;
  width: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  &:focus {
    outline: none;
  }
  @media (min-width: 768px) {
    display: none;
  }
`

const ToggleButtonLine = styled.div`
  width: 30px;
  height: 3px;
  background-color: #384f47;
`
const MobileMenuDrawerButton = props => {
  return (
    <ToggleButton onClick={props.click}>
      <ToggleButtonLine></ToggleButtonLine>
      <ToggleButtonLine></ToggleButtonLine>
      <ToggleButtonLine></ToggleButtonLine>
    </ToggleButton>
  )
}

export default MobileMenuDrawerButton
