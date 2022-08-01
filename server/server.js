const path = require('path')
const express = require('express')
const artRoute = require('./routes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/api/v1/art', artRoute)

module.exports = server
