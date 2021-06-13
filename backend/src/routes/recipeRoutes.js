const { Router } = require('express')
const { RecipeController } = require('../controllers')

const recipeRoutes = Router()

recipeRoutes.post('/:user_id', RecipeController.store)
recipeRoutes.get('/', RecipeController.index)

module.exports = recipeRoutes
