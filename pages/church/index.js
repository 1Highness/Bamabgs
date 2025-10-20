import Layout from '../../components/Layout'
import Card from '../../components/Card'
import Link from 'next/link'

export default function Church() {
  const serviceTimes = [
    { day: 'Sunday', time: '8:00 AM', service: 'First Service' },
    { day: 'Sunday', time: '10:30 AM', service: 'Second Service' },
    { day: 'Wednesday', time: '5:30 PM', service: 'Midweek Service' },
    { day: 'Friday', time: '6:00 PM', service: 'Prayer Meeting' }
  ]
  
  return (
    <Layout>
      <div className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">BMM Church</h1>
          <p className="text-xl">Worship, Fellowship, and Spiritual Growth</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <h2 className="text-2xl font-bold mb-6">Welcome to Our Church</h2>
              <p className="text-gray-600 mb-6">
                Believer's Manhaniam Ministries is a vibrant community of believers dedicated to 
                worshiping God, growing in faith, and serving our community in Ughelli and beyond.
              </p>
              
              <h3 className="text-xl font-bold mb-4">Service Times</h3>
              <div className="space-y-4 mb-6">
                {serviceTimes.map((service, index) => (
                  <div key={index} className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <div className="font-semibold">{service.service}</div>
                      <div className="text-sm text-gray-600">{service.day}</div>
                    </div>
                    <div className="text-lg font-bold text-primary">{service.time}</div>
                  </div>
                ))}
              </div>

              <Link href="/church/events">
                <button className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
                  View Church Events
                </button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}