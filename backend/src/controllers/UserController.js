const { User } = require('../models')

class UserController {
  async store(req, res) {
    const { name, email, password } = req.body

    const emailAlreadyExists = await User.findOne({
      where: { email }
    })

    if (emailAlreadyExists) {
      return res.status(409).send({ error: 'Esse email já está em uso' })
    }

    console.log(user)

    return res.json({ message: 'ok' })
  }
}

module.exports = new UserController()
