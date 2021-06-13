const { Recipe, User } = require('../models')

class RecipeController {
  async index(req, res) {
    try {
      const recipes = await Recipe.findAll({
        where: { status: 'approved' },
        include: {
          model: User,
          as: 'user',
          attributes: ['name']
        }
      })

      return res.status(200).json({
        message: 'Receitas recuperados com sucesso!',
        content: {
          recipes
        }
      })
    } catch (e) {
      return res.status(500).json({ error: e.message })
    }
  }

  async findByUser(req, res) {
    try {
      const { user_id } = req.params

      const user = await User.findByPk(user_id, {
        include: { association: 'recipes' }
      })

      return res.status(200).json({
        message: `Receitas de ${user.name} recuperadas com sucesso!`,
        content: {
          recipes: user.recipes
        }
      })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  async store(req, res) {
    try {
      const { user_id } = req.params
      const {
        title,
        description,
        preparationTime,
        portions,
        ingredients,
        steps
      } = req.body

      const user = await User.findByPk(user_id)

      if (!user) {
        return res.status(404).json({ error: 'Usúario não encontrado' })
      }

      const recipe = await Recipe.create({
        user_id,
        title,
        description,
        preparationTime,
        portions,
        ingredients,
        steps
      })

      return res.status(201).json(recipe)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
}

module.exports = new RecipeController()
