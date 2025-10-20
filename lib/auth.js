import { config } from '../config.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const JWT_SECRET = config.JWT_SECRET

export const hashPassword = async (password) => {
  const saltRounds = 12
  return await bcrypt.hash(password, saltRounds)
}

export const verifyPassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword)
}

export const generateToken = (userId, role) => {
  return jwt.sign(
    { userId, role }, 
    JWT_SECRET, 
    { expiresIn: '7d' }
  )
}

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch (error) {
    return null
  }
}

export const requireAuth = (handler) => {
  return async (req, res) => {
    const token = req.headers.authorization?.replace('Bearer ', '')
    
    if (!token) {
      return res.status(401).json({ message: 'Authentication required' })
    }

    const decoded = verifyToken(token)
    if (!decoded) {
      return res.status(401).json({ message: 'Invalid token' })
    }

    req.user = decoded
    return handler(req, res)
  }
}

export const requireRole = (role) => {
  return (handler) => {
    return async (req, res) => {
      if (req.user.role !== role && req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Insufficient permissions' })
      }
      return handler(req, res)
    }
  }
}