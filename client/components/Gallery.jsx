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
        onClick={() => listGallery('./SavedPictures/')}
      />
    </div>
  )
}

function listGallery(Gallery) {
  window.prompt(Gallery)
}

export default Gallery
