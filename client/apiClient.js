import request from 'superagent'

export function postArt(artArray, name) {
  return request
    .post('/api/v1/art/postArt')
    .send({ art: artArray, artName: name })
    .then(() => {
      return
    })
}

export function getArt(name) {
  return request
    .get('/api/v1/art/getArt/' + name)
    .then((res) => {
      return res.body
    })

    .catch((error) => {
      console.error(error)
    })
}

export function getGallery(name) {
  return request
    .get('/api/v1/art/getGallery/' + name)
    .then((res) => {
      console.log(res)
      return res.body
    })

    .catch((error) => {
      console.error(error)
    })
}

export function deleteArt(name) {
  return request
    .delete('/api/v1/art/delArt/' + name)
    .send({ artName: name })
    .then((res) => {
      return res.body
    })

    .catch((error) => {
      console.error(error)
    })
}
