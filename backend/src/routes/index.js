const { Router } = require('express')

const userRoutes = require('./userRoutes')
const authRoutes = require('./authRoutes')
const recipeRoutes = require('./recipeRoutes')

const routes = Router()

routes.use('/users', userRoutes)
routes.use('/auth', authRoutes)
routes.use('/recipes', recipeRoutes)

routes.get('/', (_, res) => res.status(200).json({ message: 'Hello' }))

module.exports = routes
