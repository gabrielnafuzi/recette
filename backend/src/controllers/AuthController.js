const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { User } = require('../models')
const { JWT_SECRET } = require('../config/authConfig')

class AuthController {
  async login(req, res) {
    try {
      const { email, password } = req.body

      const user = await User.findOne({ where: { email } })

      if (!user) {
        return res.status(404).json({ error: 'Email não cadastrado' })
      }

      const isPasswordValid = await bcrypt.compare(
        password,
        user.dataValues.password
      )

      if (!isPasswordValid) {
        return res.status(403).json({ error: 'Senha inválida' })
      }

      const token = jwt.sign({}, JWT_SECRET, {
        subject: String(user.dataValues.id),
        expiresIn: '1d'
      })

      const { password: pass, ...userData } = user.dataValues

      return res.status(200).json({
        message: 'Login realizado com sucesso',
        content: {
          token,
          user: userData
        }
      })
    } catch (e) {
      return res.status(500).json({ error: e.message })
    }
  }

  async getCurrentUser(req, res) {
    const { userId } = req

    const user = await User.findByPk(userId)

    return res.status(200).json({
      message: 'Dados recuperados com sucesso!',
      content: {
        user
      }
    })
  }
}

module.exports = new AuthController()
