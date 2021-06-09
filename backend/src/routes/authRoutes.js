const { Router } = require('express')
const { AuthController } = require('../controllers')
const { checkAuth } = require('../middleware/auth')

const authRoutes = Router()

authRoutes.post('/login', AuthController.login)
authRoutes.get('/me', checkAuth, AuthController.getCurrentUser)

module.exports = authRoutes
