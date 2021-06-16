const bcrypt = require('bcrypt')
const { User } = require('../models')

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

      return res.status(201).json(newUser)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
}

module.exports = new UserController()
