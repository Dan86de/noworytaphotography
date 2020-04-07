import React from 'react'
import { ReactPhotoCollage } from 'react-photo-collage'
import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  {
    allFile(filter: { absolutePath: { regex: "/CollageImages/" } }) {
      nodes {
        childImageSharp {
          original {
            src
          }
        }
      }
    }
  }
`
const setting = {
  width: '100%',
  height: ['500px', '400px'],
  layout: [2, 3],
  showNumOfRemainingPhotos: true,
}

const PhotoCollage = () => {
  const imageData = useStaticQuery(query)
  const imagesURLs = imageData.allFile.nodes.map(image => ({
    src: image.childImageSharp.original.src,
  }))

  return (
    <>
      <ReactPhotoCollage {...setting} photos={imagesURLs} />
    </>
  )
}

export default PhotoCollage
