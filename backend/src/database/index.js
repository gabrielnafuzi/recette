const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const { User, Recipe } = require('../models')

const connection = new Sequelize(dbConfig)

User.init(connection)
Recipe.init(connection)

User.associate(connection.models)
Recipe.associate(connection.models)

module.exports = connection
