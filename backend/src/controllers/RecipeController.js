const { checkAuth } = require('../middleware/auth')
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
      const { userId } = req

      const user = await User.findByPk(userId, {
        include: { association: 'recipes' }
      })

      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' })
      }

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

  async findAllToAdmin(req, res) {
    try {
      const recipes = await Recipe.findAll({
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

  async show(req, res) {
    try {
      const { recipe_id } = req.params
      const { userId } = req

      const recipe = await Recipe.findByPk(recipe_id)

      if (!recipe) {
        return res.status(404).json({ error: 'Receita não encontrada!' })
      }

      const baseSuccessResponse = {
        message: 'Dados da receita recuperados com sucesso!',
        content: {
          recipe
        }
      }

      if (recipe.status === 'approved') {
        return res.status(200).json(baseSuccessResponse)
      }

      const user = await User.findByPk(userId)

      if ((!user || user?.id !== recipe.user_id) && user?.role !== 'admin') {
        return res
          .status(403)
          .json({ error: 'Sem permissão para ver essa receita!' })
      }

      return res.status(200).json(baseSuccessResponse)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  async store(req, res) {
    try {
      const { userId: user_id } = req
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

  async update(req, res) {
    try {
      const {
        title,
        description,
        preparationTime,
        portions,
        ingredients,
        status,
        steps
      } = req.body
      const { userId } = req
      const { recipe_id } = req.params

      const user = await User.findByPk(userId, {
        include: { association: 'recipes' }
      })

      if (!user) {
        return res.status(404).json({ error: 'Usúario não encontrado' })
      }

      const recipe = user.recipes.find(({ id }) => String(id) === recipe_id)

      if (!recipe && user.role !== 'admin') {
        return res.status(404).json({ error: 'Receita não encontrada' })
      }

      if (userId !== String(recipe?.user_id) && user.role !== 'admin') {
        return res
          .status(403)
          .json({ error: 'Sem permissão para editar essa receita' })
      }

      if (status && status !== recipe?.status && user.role !== 'admin') {
        return res
          .status(403)
          .json({ error: 'Sem permissão para trocar o status dessa receita!' })
      }

      await Recipe.update(
        {
          title,
          description,
          preparationTime,
          portions,
          ingredients,
          status,
          steps
        },
        {
          where: {
            id: recipe_id
          }
        }
      )

      return res.status(200).json({
        message: 'Receita atualizada com sucesso!',
        content: {}
      })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  async destroy(req, res) {
    try {
      const { userId } = req
      const { recipe_id } = req.params

      const recipe = await Recipe.findByPk(recipe_id)

      if (!recipe) {
        return res.status(404).json({ error: 'Receita não encontrada' })
      }

      if (userId !== String(recipe.user_id)) {
        return res
          .status(403)
          .json({ error: 'Sem permissão para deletar essa receita' })
      }

      await Recipe.destroy({
        where: {
          id: recipe.id
        }
      })

      return res.status(200).json({
        message: 'Receita deletada com sucesso!',
        content: {
          recipe
        }
      })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
}

module.exports = new RecipeController()
