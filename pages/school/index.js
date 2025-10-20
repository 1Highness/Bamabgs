import Layout from '../../components/Layout'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Link from 'next/link'

export default function School() {
  return (
    <Layout>
      <div className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">BMM Bible School</h1>
          <p className="text-xl">Quality biblical education for spiritual growth and ministry excellence</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <h2 className="text-2xl font-bold mb-6">About Our Bible School</h2>
              <p className="text-gray-600 mb-6">
                The Believer's Manhaniam Ministries Bible School offers comprehensive theological 
                education designed to equip believers for effective ministry and spiritual leadership.
              </p>
              
              <h3 className="text-xl font-bold mb-4">Program Features</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Certificate in Biblical Studies</li>
                <li>Diploma in Theology</li>
                <li>Leadership Training Programs</li>
                <li>Practical Ministry Experience</li>
                <li>Qualified and Experienced Instructors</li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/school/register">
                  <Button variant="primary">Register Now</Button>
                </Link>
                <Link href="/login">
                  <Button variant="outline">Student Portal</Button>
                </Link>
              </div>
            </Card>
          </div>

          <div>
            <Card>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-4">
                <Link href="/school/register" className="block p-4 border rounded-lg hover:bg-gray-50 transition">
                  <div className="font-semibold">New Registration</div>
                  <div className="text-sm text-gray-600">Apply for our programs</div>
                </Link>
                
                <Link href="/school/dashboard" className="block p-4 border rounded-lg hover:bg-gray-50 transition">
                  <div className="font-semibold">Student Dashboard</div>
                  <div className="text-sm text-gray-600">Access your courses</div>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}