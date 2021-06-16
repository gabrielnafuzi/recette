const { Model, DataTypes } = require('sequelize')

class Recipe extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        preparationTime: DataTypes.STRING,
        portions: DataTypes.INTEGER,
        ingredients: DataTypes.ARRAY(DataTypes.JSON),
        steps: DataTypes.ARRAY(DataTypes.JSON),
        status: DataTypes.ENUM('approved', 'disapproved', 'analysis')
      },
      { sequelize }
    )

    return this
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
    this.hasOne(models.Image, { foreignKey: 'recipe_id', as: 'image' })
  }
}

module.exports = Recipe
