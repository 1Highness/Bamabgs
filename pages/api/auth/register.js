import { hashPassword } from '../../../../lib/auth'

// Mock database for SPCK
let mockUsers = []
let mockStudents = []

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }
  
  try {
    const { fullName, email, phone, program, address, password } = req.body
    
    // Validation
    if (!fullName || !email || !phone || !program || !password) {
      return res.status(400).json({ message: 'All fields are required' })
    }
    
    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters' })
    }
    
    // Check if user already exists
    const existingUser = mockUsers.find(user => user.email === email)
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email' })
    }
    
    // Hash password
    const hashedPassword = await hashPassword(password)
    
    // Create user
    const newUser = {
      _id: 'user_' + Date.now(),
      email,
      password: hashedPassword,
      role: 'student',
      createdAt: new Date(),
      lastLogin: null
    }
    
    // Create student profile
    const newStudent = {
      userId: newUser._id,
      fullName,
      email,
      phone,
      address: address || '',
      program,
      status: 'pending',
      classes: [],
      createdAt: new Date()
    }
    
    mockUsers.push(newUser)
    mockStudents.push(newStudent)
    
    console.log('📝 New registration:', { email, fullName, program })
    console.log('👥 Total users:', mockUsers.length)
    
    res.status(201).json({
      message: 'Registration successful! Your account is pending approval.',
      success: true
    })
    
  } catch (error) {
    console.error('Registration error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}