const express = require('express')

const router = express.Router()
const fs = require('fs')

router.post('/postArt', (req, res) => {
  fs.writeFile(
    './SavedPictures/' + req.body.artName + '.json',
    JSON.stringify(req.body.art),
    (err) => {
      if (err) {
        console.error(err)
      }
    }
  )
  return res.sendStatus(201)
})

router.get('/getArt/:art', (req, res) => {
  fs.readFile(
    './SavedPictures/' + req.params.art + '.json',
    'utf8',
    function read(err, data) {
      if (err) {
        console.error(err)
      }
      return res.json(JSON.parse(data))
    }
  )
})

router.delete('/delArt/:art', (req, res) => {
  console.log('./SavedPictures/' + req.params.art + '.json')
  fs.unlink('./SavedPictures/' + req.params.art + '.json', (err) => {
    if (err) {
      console.error(err)
      return
    }

    return res.sendStatus(201)
  })
})

router.get('/getGallery:gallery', (req, res) => {
  let fileNames = []
  fs.readdir('./SavedPictures/', (err, files) => {
    files.forEach((file) => {
      let fileName = file
      fileName = fileName.replace('.json', '')
      console.log(fileName)
      fileNames.push(fileName)
      console.log(fileNames)
      return fileNames
    })
    if (err) {
      console.error(err)
    }
    return res.sendStatus(201)
  })
})

module.exports = router
