const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/authConfig')
const User = require('../models/User')

const getHeaderToken = req => {
  const authHeader = req?.headers?.authorization

  if (!authHeader) {
    return null
  }

  const [, token] = authHeader.split(' ')

  return token
}

module.exports.checkAuth = (req, res, next) => {
  const token = getHeaderToken(req, res)
  const unauthorizedMessage = 'Sem permissão! Faça Login para continuar'

  if (!token) {
    return res.status(401).json({ error: unauthorizedMessage })
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET)

    req.userId = decoded.sub

    return next()
  } catch (e) {
    return res.status(401).json({ error: unauthorizedMessage })
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

module.exports.setUserIdOnReq = (req, res, next) => {
  const token = getHeaderToken(req)

  try {
    const decoded = jwt.verify(token, JWT_SECRET)

    req.userId = decoded.sub
  } finally {
    return next()
  }
}
