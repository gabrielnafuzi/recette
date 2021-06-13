const { Router } = require('express')
const { RecipeController } = require('../controllers')
const { checkAuth, checkIsAdmin } = require('../middleware/auth')

const recipeRoutes = Router()

recipeRoutes.get('/', RecipeController.index)
recipeRoutes.get('/my-recipes', checkAuth, RecipeController.findByUser)
recipeRoutes.get('/admin', checkAuth, checkIsAdmin, RecipeController.findAllToAdmin)
recipeRoutes.post('/:user_id', checkAuth, RecipeController.store)

module.exports = recipeRoutes
