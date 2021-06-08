const { Router } = require('express')
const { UserController } = require('../controllers')

const userRoutes = Router()

userRoutes.post('/', UserController.store)

module.exports = userRoutes
