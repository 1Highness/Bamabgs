import { requireAuth } from '../../../../lib/auth'

// Mock data (same as login.js)
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

async function handler(req, res) {
  try {
    const student = mockStudents.find(s => s.userId === req.user.userId)

    if (!student) {
      return res.status(404).json({ message: 'Student profile not found' })
    }

    // Get student's classes
    const classes = mockClasses.filter(c => student.classes.includes(c._id))

    // Get announcements
    const announcements = mockAnnouncements

    res.status(200).json({
      student,
      classes,
      announcements,
      stats: {
        activeCourses: classes.length,
        completedAssignments: 3,
        upcomingDeadlines: 2
      }
    })

  } catch (error) {
    console.error('Dashboard error:', error)
    res.status(500).json({ message: 'Error fetching dashboard data' })
  }
}

export default requireAuth(handler)