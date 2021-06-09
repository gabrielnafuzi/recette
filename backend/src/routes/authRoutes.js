const { Router } = require('express')
const { AuthController } = require('../controllers')

const authRoutes = Router()

authRoutes.post('/login', AuthController.login)

module.exports = authRoutes
