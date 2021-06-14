const { Router } = require('express')
const { RecipeController } = require('../controllers')
const { checkAuth, checkIsAdmin } = require('../middleware/auth')

const recipeRoutes = Router()

recipeRoutes.get('/', RecipeController.index)
recipeRoutes.get('/my-recipes', checkAuth, RecipeController.findByUser)
recipeRoutes.get(
  '/admin',
  checkAuth,
  checkIsAdmin,
  RecipeController.findAllToAdmin
)
recipeRoutes.post('/', checkAuth, RecipeController.store)
recipeRoutes.patch('/:recipe_id', checkAuth, RecipeController.update)
recipeRoutes.delete('/:recipe_id', checkAuth, RecipeController.destroy)

module.exports = recipeRoutes
