import Layout from '../../components/Layout'
import Card from '../../components/Card'

export default function Dashboard() {
  return (
    <Layout>
      <div className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Student Dashboard</h1>
          <p className="text-xl">Welcome back, Student!</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4</div>
            <div className="text-gray-600">Active Courses</div>
          </Card>
          
          <Card className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">85%</div>
            <div className="text-gray-600">Overall Progress</div>
          </Card>
          
          <Card className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">2</div>
            <div className="text-gray-600">Pending Assignments</div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <h2 className="text-xl font-bold mb-4">My Courses</h2>
            <div className="space-y-4">
              {['Biblical Hermeneutics', 'Systematic Theology', 'Church History', 'Pastoral Ministry'].map((course, index) => (
                <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 transition">
                  <div className="font-semibold">{course}</div>
                  <div className="text-sm text-gray-600">Progress: {75 + index * 5}%</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${75 + index * 5}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-bold mb-4">Recent Announcements</h2>
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-primary bg-blue-50">
                <div className="font-semibold">Mid-term Examination Schedule</div>
                <div className="text-sm text-gray-600">Posted 2 days ago</div>
              </div>
              
              <div className="p-4 border-l-4 border-accent bg-green-50">
                <div className="font-semibold">New Study Materials Available</div>
                <div className="text-sm text-gray-600">Posted 1 week ago</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  )
}