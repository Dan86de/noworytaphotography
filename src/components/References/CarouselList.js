import React from 'react'

import CarouselListItem from './CarouselListItem'

const CarouselList = ({
  activeReferenceId,
  references,
  setActiveReferenceId,
}) => {
  const listItems = references.map(reference => {
    return (
      <CarouselListItem
        isActive={reference.id === activeReferenceId}
        key={reference.id}
        reference={reference}
        setActiveReferenceId={setActiveReferenceId}
      />
    )
  })
  return <ul>{listItems}</ul>
}

export default CarouselList
