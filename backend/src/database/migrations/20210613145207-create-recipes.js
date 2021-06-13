'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('recipes', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      preparation_time: {
        type: Sequelize.STRING,
        allowNull: false
      },
      portions: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      ingredients: {
        type: Sequelize.ARRAY(Sequelize.JSON),
        allowNull: false
      },
      steps: {
        type: Sequelize.ARRAY(Sequelize.JSON),
        allowNull: false
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('recipes')
  }
}

// title
// description
// preparationTime
// portions
// ingredients[ { index: 0, text: '' } ]
// steps[ { index: 0, text: '' } ]
