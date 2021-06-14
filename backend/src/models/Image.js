const { Model, DataTypes } = require('sequelize')

class Image extends Model {
  static init(sequelize) {
    super.init(
      {
        path: DataTypes.STRING
      },
      { sequelize }
    )

    return this
  }

  static associate(models) {
    this.belongsTo(models.Recipe, { foreignKey: 'recipe_id', as: 'recipe' })
  }
}

module.exports = Image
