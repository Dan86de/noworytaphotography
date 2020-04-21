import React from 'react'
import styled from 'styled-components'

const BackdropWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 55;
`
const Backdrop = props => {
  return <BackdropWrapper onClick={props.click} />
}

export default Backdrop
