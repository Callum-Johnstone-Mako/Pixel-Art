import React, { useState } from 'react'

import { getGallery } from '../apiClient'

const Gallery = (props) => {
  return (
    <div>
      {' '}
      <input
        type="button"
        style={{ backgroundColor: 'grey', fontSize: '50px' }}
        value="Gallery"
        onClick={() => getGallery('./SavedPictures/')}
      />
    </div>
  )
}

export default Gallery
