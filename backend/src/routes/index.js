const { Router } = require('express')
const userRoutes = require('./userRoutes')

const routes = Router()

routes.get('/', (req, res) => {
  return res.status(200).json({ message: 'Hello' })
})

routes.use('/users', userRoutes)

module.exports = routes
