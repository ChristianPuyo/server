const express = require('express')
const router = require('./routes/index')
const morgan = require('morgan')

const server = express()



//Milddleware para que el servidor funcione correctamente
server.use(morgan('dev'))
server.use(express.json())

server.use(router)

module.exports= server

//Este archivo contiene exclusivamente al servidor
//server

