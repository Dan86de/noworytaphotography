import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  width: 100%;
  padding: 0 1rem;
  @media (min-width: 768px) {
    flex-direction: row-reverse;
    padding: 0 2.75rem;
    flex-wrap: wrap;
  }
  @media (min-width: 1280px) {
    flex-direction: row;
    padding: 0 7rem;
  }
  @media (min-width: 1920px) {
    padding: 0 12rem;
  }
`

const References = () => {
  return (
    <StyledWrapper>
      <h1>References here</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
        magni nobis aliquam animi ipsa sapiente! Ab unde vitae animi libero
        tenetur delectus suscipit, itaque quia minima ad. Eos velit magni quasi,
        eius est nesciunt deleniti quisquam quis, eligendi assumenda sapiente
        repellendus animi perferendis sint commodi harum ad earum, repudiandae
        repellat!
      </p>
    </StyledWrapper>
  )
}

export default References
