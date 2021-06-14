const { Router } = require('express')
const multer = require('multer')
const uploadConfig = require('../config/upload')

const { RecipeController } = require('../controllers')
const {
  checkAuth,
  checkIsAdmin,
  setUserIdOnReq
} = require('../middleware/auth')

const recipeRoutes = Router()
const upload = multer(uploadConfig)

recipeRoutes.get('/', RecipeController.index)
recipeRoutes.get('/my-recipes', checkAuth, RecipeController.findByUser)
recipeRoutes.get(
  '/admin',
  checkAuth,
  checkIsAdmin,
  RecipeController.findAllToAdmin
)
recipeRoutes.get('/:recipe_id', setUserIdOnReq, RecipeController.show)
recipeRoutes.post(
  '/',
  checkAuth,
  upload.single('image'),
  RecipeController.store
)
recipeRoutes.patch('/:recipe_id', checkAuth, RecipeController.update)
recipeRoutes.delete('/:recipe_id', checkAuth, RecipeController.destroy)

module.exports = recipeRoutes
