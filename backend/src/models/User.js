const { Model, DataTypes } = require('sequelize')

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: {
          type: DataTypes.STRING,
          get() {
            return undefined
          }
        },
        role: DataTypes.ENUM('admin', 'ordinary')
      },
      { sequelize }
    )

    return this
  }

  static associate(models) {
    this.hasMany(models.Recipe, { foreignKey: 'user_id', as: 'recipes' })
  }
}

module.exports = User
