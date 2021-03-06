const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { User } = require('../models')
const { JWT_SECRET } = require('../config/authConfig')

class UserController {
  async store(req, res) {
    try {
      const { name, email, password } = req.body

      const emailAlreadyExists = await User.findOne({
        where: { email }
      })

      if (emailAlreadyExists) {
        return res.status(409).send({ error: 'Esse email já está em uso' })
      }

      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt)

      const newUser = await User.create({
        name,
        email,
        password: hashedPassword
      })

      const token = jwt.sign({}, JWT_SECRET, {
        subject: String(newUser.dataValues.id),
        expiresIn: '1d'
      })

      const { password: pass, ...user } = newUser.dataValues

      return res.status(201).json({
        message: 'Conta criada com sucesso!',
        content: {
          token,
          user
        }
      })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
}

module.exports = new UserController()
