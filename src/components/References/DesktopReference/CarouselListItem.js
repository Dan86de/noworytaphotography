import React from 'react'
import styled from 'styled-components'

const StyledItemWrapper = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  max-width: 626px;
  padding: 0 32px;
  border: 4px solid white;
  border-radius: 5px;
  background-color: white;
  margin-bottom: 24px;
  transition: all 0.3s linear;
  cursor: pointer;
  &:hover,
  &.active {
    border: 4px solid #384f47;
  }
`

const ItemAvatar = styled.div`
  width: 80px;
  height: 80px;
  background-color: #384f47;
  margin-right: 40px;
  border-radius: 40px;
`

const ItemBodyWrapper = styled.div`
  h3 {
    font-size: 24px;
    font-weight: 600;
    transform: translateY(8px);
  }
  h4 {
    font-size: 18px;
    color: #a6b0ad;
    font-weight: 500;
    transform: translateY(-8px);
  }
`

const CarouselListItem = ({
  reference,
  setActiveReferenceId,
  isActive,
  handlePause,
}) => {
  return (
    <StyledItemWrapper
      key={reference.id}
      onClick={() => {
        setActiveReferenceId(reference.id)
      }}
      // onMouseEnter={() => handlePause(false)}
      onMouseLeave={() => handlePause(true)}
      onMouseOver={() => {
        handlePause(false)
        setActiveReferenceId(reference.id)
      }}
      className={isActive && 'active'}
    >
      <ItemAvatar />
      <ItemBodyWrapper>
        <h3>{reference.name}</h3>
        <h4>{reference.position}</h4>
      </ItemBodyWrapper>
    </StyledItemWrapper>
  )
}

export default CarouselListItem
