/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'

const size = 10

const Pixels = (props) => {
  const [style, setStyle] = useState({
    height: `${size}px`,
    width: `${size}px`,
    backgroundColor: 'white',
    current: 'white',
  })

  const handleClick = (evt) => {
    props.updateColor(props.index)
  }

  const doubleClick = (evt) => {
    props.updateColor(props.index)
  }

  const dragEnterHandler = (evt) => {
    props.updateColor(props.index)
  }

  return (
    <div
      style={{
        height: `${size}px`,
        width: `${size}px`,
        backgroundColor: props.current,
      }}
      onDoubleClick={doubleClick}
      draggable={true}
      onClick={handleClick}
      onDragEnter={dragEnterHandler}
    ></div>
  )
}

export default Pixels
