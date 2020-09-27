import React from 'react'

const ReferenceBody = ({ activeReference }) => {
  return (
    <>
      <h3>{activeReference.refTitle}</h3>
      <span>Gwiazdek: {activeReference.refStars}</span>
      <p>{activeReference.refBody}</p>
    </>
  )
}

export default ReferenceBody
