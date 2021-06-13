const { Router } = require('express')
const { RecipeController } = require('../controllers')

const recipeRoutes = Router()

recipeRoutes.post('/:user_id', RecipeController.store)
recipeRoutes.get('/', RecipeController.index)
recipeRoutes.get('/:user_id', RecipeController.findByUser)

module.exports = recipeRoutes
