const express=  require('express')
const Router = express.Router()
const queryController = require('../controller/queryController')

Router.post('/createQuery' , queryController.createQuery)



module.exports = Router