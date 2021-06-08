const { Router } = require('express')
const userRoutes = require('./userRoutes')

const routes = Router()

routes.use('/users', userRoutes)

routes.get('/', (req, res) => {
  return res.status(200).json({ message: 'Hello' })
})

module.exports = routes
