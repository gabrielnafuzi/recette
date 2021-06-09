const { Router } = require('express')
const userRoutes = require('./userRoutes')
const authRoutes = require('./authRoutes')

const routes = Router()

routes.use('/users', userRoutes)
routes.use('/auth', authRoutes)

routes.get('/', (req, res) => {
  return res.status(200).json({ message: 'Hello' })
})

module.exports = routes
