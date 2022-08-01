import React, { useState } from 'react'
import Pixels from './Pixels'

import { postArt, getArt, deleteArt } from '../apiClient'
//import Pattern1 from '../../SavedPictures/Pattern1.js'
//import Sun from '../../SavedPictures/Sun.js'

//console.log(Pattern1)

//Responsive queries
let viewportWidth = window.innerWidth
let arrayLength
let inputSize
let buttonSize

if (viewportWidth == 1920) {
  arrayLength = 3071
  inputSize = '83px'
  buttonSize = '50px'
} else if (viewportWidth == 1536) {
  arrayLength = 2405
  inputSize = '59px'
  buttonSize = '40px'
} else if (viewportWidth == 768) {
  arrayLength = 1023
  inputSize = '15.5px'
  buttonSize = '26px'
} else if (viewportWidth == 320) {
  arrayLength = 416
  inputSize = '12px'
  buttonSize = '12px'
}

const Colors = (props) => {
  const [color, setColor] = useState('white')

  const [colors, setColors] = useState(
    Array.from({ length: arrayLength }, (v, i) => 'white')
  )

  const pixelArr = Array.from({ length: arrayLength }, (v, i) => (
    <Pixels key={i} current={colors[i]} index={i} updateColor={updateColor} />
  ))

  function updateColor(index) {
    const newColors = [...colors]
    newColors[index] = color
    setColors(newColors)
  }

  function savePic() {
    var artName = window.prompt('Name your Masterpiece')
    const newArr = colors
    console.log('trying to save')
    postArt(newArr, artName)
  }

  function loadPic() {
    let artNameArr = window.prompt('Load a Masterpiece')
    getArt(artNameArr)
      .then((res) => {
        setColors(res)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  function deletePic() {
    let artName = window.prompt('Delete a Masterpiece')
    deleteArt(artName)
  }

  function refreshPage() {
    window.location.reload(false)
  }

  return (
    <>
      {pixelArr}
      <input
        type="button"
        style={{ backgroundColor: 'red', fontSize: inputSize }}
        value="  "
        onClick={() => setColor('red')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'orange', fontSize: inputSize }}
        value="  "
        onClick={() => setColor('orange')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'yellow', fontSize: inputSize }}
        value="  "
        onClick={() => setColor('yellow')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'chartreuse', fontSize: inputSize }}
        value="  "
        onClick={() => setColor('chartreuse')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'green', fontSize: inputSize }}
        value="  "
        onClick={() => setColor('green')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'springGreen', fontSize: inputSize }}
        value="  "
        onClick={() => setColor('springGreen')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'cyan', fontSize: inputSize }}
        value="  "
        onClick={() => setColor('cyan')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'dodgerBlue', fontSize: inputSize }}
        value="  "
        onClick={() => setColor('dodgerBlue')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'blue', fontSize: inputSize }}
        value="  "
        onClick={() => setColor('blue')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'purple', fontSize: inputSize }}
        value="  "
        onClick={() => setColor('purple')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'magenta', fontSize: inputSize }}
        value="  "
        onClick={() => setColor('magenta')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'salmon', fontSize: inputSize }}
        value="  "
        onClick={() => setColor('salmon')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'sienna', fontSize: inputSize }}
        value="  "
        onClick={() => setColor('sienna')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'grey', fontSize: inputSize }}
        value="  "
        onClick={() => setColor('grey')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'white', fontSize: inputSize }}
        value="  "
        onClick={() => setColor('white')}
      />
      <input
        type="button"
        style={{
          backgroundColor: 'black',
          borderColor: 'white',
          fontSize: inputSize,
        }}
        value="  "
        onClick={() => setColor('black')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'grey', fontSize: buttonSize }}
        value="Reset"
        onClick={() => refreshPage()}
      />
      <input
        type="button"
        style={{ backgroundColor: 'grey', fontSize: buttonSize }}
        value="Save"
        onClick={() => savePic()}
      />
      <input
        type="button"
        style={{ backgroundColor: 'grey', fontSize: buttonSize }}
        value="Load"
        onClick={() => loadPic()}
      />
      <input
        type="button"
        style={{ backgroundColor: 'grey', fontSize: buttonSize }}
        value="Delete"
        onClick={() => deletePic()}
      />
    </>
  )
}

export default Colors
