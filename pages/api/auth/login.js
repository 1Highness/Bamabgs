import { verifyPassword, generateToken } from '../../../../lib/auth'

// Mock demo accounts for SPCK
let mockUsers = [
  {
    _id: 'demo_student_1',
    email: 'student@bmm.org',
    password: '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdCvWfV5ujeeLCq', // "password"
    role: 'student',
    createdAt: new Date('2024-01-01'),
    lastLogin: null
  },
  {
    _id: 'demo_admin_1',
    email: 'admin@bmm.org', 
    password: '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdCvWfV5ujeeLCq', // "password"
    role: 'admin',
    createdAt: new Date('2024-01-01'),
    lastLogin: null
  }
]

let mockStudents = [
  {
    userId: 'demo_student_1',
    fullName: 'John Demo Student',
    email: 'student@bmm.org',
    phone: '+234 123 456 7890',
    address: '123 Church Street, Ughelli',
    program: 'certificate',
    status: 'active',
    classes: ['class_1', 'class_2'],
    createdAt: new Date('2024-01-15')
  }
]

let mockClasses = [
  {
    _id: 'class_1',
    name: 'Biblical Hermeneutics',
    code: 'BIB101',
    description: 'Introduction to biblical interpretation methods',
    instructor: 'Dr. Samuel Johnson',
    schedule: 'Mondays 10:00 AM',
    students: ['demo_student_1'],
    createdAt: new Date('2024-01-10')
  },
  {
    _id: 'class_2', 
    name: 'Systematic Theology',
    code: 'THEO201',
    description: 'Comprehensive study of Christian doctrines',
    instructor: 'Rev. Grace Williams',
    schedule: 'Wednesdays 2:00 PM',
    students: ['demo_student_1'],
    createdAt: new Date('2024-01-10')
  }
]

let mockAnnouncements = [
  {
    _id: 'announce_1',
    title: 'Mid-term Examinations Schedule',
    content: 'Mid-term examinations will commence next week. Please check the notice board for your timetable.',
    author: 'Academic Office',
    category: 'school',
    priority: 'high',
    createdAt: new Date('2024-01-20')
  },
  {
    _id: 'announce_2',
    title: 'New Study Materials Available',
    content: 'New study materials for Biblical Hermeneutics are now available in the library.',
    author: 'Library Department',
    category: 'school', 
    priority: 'medium',
    createdAt: new Date('2024-01-18')
  }
]

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { email, password, userType } = req.body

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' })
    }

    // Find user
    const user = mockUsers.find(u => u.email === email)
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    // Verify password (all demo passwords are "password")
    const isValidPassword = await verifyPassword(password, user.password)
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    // Update last login
    user.lastLogin = new Date()

    // Generate token
    const token = generateToken(user._id, user.role)

    // Get user profile
    let profile = null
    if (user.role === 'student') {
      profile = mockStudents.find(s => s.userId === user._id)
    }

    console.log('🔐 User logged in:', { email, role: user.role })

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        profile: profile
      }
    })

  } catch (error) {
    console.error('Login error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}