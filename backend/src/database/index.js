const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const { User, Recipe, Image } = require('../models')

const connection = new Sequelize(dbConfig)

User.init(connection)
Recipe.init(connection)
Image.init(connection)

User.associate(connection.models)
Recipe.associate(connection.models)
Image.associate(connection.models)

module.exports = connection
