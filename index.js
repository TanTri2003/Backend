import express from 'express'
// const cors = require('cors')
import cors from 'cors'
require('dotenv').config()
import initRoutes from './src/routes'
require('./conection_database')
const app = express()
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST','PUT','DELETE']
}))
app.use(express.json())
app.use(express.urlencoded({extends: true}))

initRoutes(app)

const PORT = process.env.PORT || 8888

const listener = app.listen(PORT,() =>{
    console.log('Server is runnig on the port '+ listener.address().port)
})