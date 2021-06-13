const { Model, DataTypes } = require('sequelize')

class Recipe extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        preparation_time: DataTypes.STRING,
        portions: DataTypes.INTEGER,
        ingredients: DataTypes.ARRAY(DataTypes.JSON),
        steps: DataTypes.ARRAY(DataTypes.JSON)
      },
      { sequelize }
    )

    return this
  }
}

module.exports = Recipe
