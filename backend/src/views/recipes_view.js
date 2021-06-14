const imagesView = require('./images_view')

module.exports = {
  render(recipe) {
    return {
      id: recipe.id,
      title: recipe.title,
      description: recipe.description,
      preparationTime: recipe.preparationTime,
      portions: recipe.portions,
      ingredients: recipe.ingredients,
      steps: recipe.steps,
      status: recipe.status,
      createdAt: recipe.createdAt,
      updatedAt: recipe.updatedAt,
      user_id: recipe.user_id,
      user: recipe.user,
      image: imagesView.render(recipe.image)
    }
  },

  renderMany(recipes) {
    return recipes.map(recipe => this.render(recipe))
  }
}
