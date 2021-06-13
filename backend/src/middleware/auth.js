const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/authConfig')
const User = require('../models/User')

module.exports.checkAuth = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: 'Token não fornecido' })
  }

  const [, token] = authHeader.split(' ')

  try {
    const decoded = jwt.verify(token, JWT_SECRET)

    req.userId = decoded.sub

    return next()
  } catch (e) {
    return res.status(401).json({ error: 'Token inválido' })
  }
}

module.exports.checkIsAdmin = async (req, res, next) => {
  const { userId } = req
  const error = 'Sem permissão para acessar!'

  try {
    const user = await User.findByPk(userId)

    if (!user || user.role !== 'admin') {
      return res.status(401).json({ error })
    }

    return next()
  } catch (e) {
    return res.status(401).json({ error })
  }
}
