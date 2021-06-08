const bcrypt = require('bcrypt')
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
        role: DataTypes.STRING
      },
      { sequelize }
    )

    return this
  }
}

module.exports = User
