import Link from 'next/link'
import Layout from '../components/Layout'
import Button from '../components/Button'
import Card from '../components/Card'

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to BMM Bible School</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Transforming lives through biblical education, worship, and community fellowship at Believer's Manhaniam Ministries, Ughelli.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/school/register">
              <Button variant="secondary">Join Bible School</Button>
            </Link>
            <Link href="/church">
              <Button variant="outline">Church Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Three Fronts Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Three-Fold Ministry</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* School Card */}
            <Card className="text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Bible School</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive biblical education and theological training for spiritual growth and ministry development.
              </p>
              <Link href="/school">
                <Button variant="primary" className="w-full">Learn More</Button>
              </Link>
            </Card>

            {/* Church Card */}
            <Card className="text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⛪</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Church</h3>
              <p className="text-gray-600 mb-6">
                Join our worship services, prayer meetings, and church events for spiritual nourishment and fellowship.
              </p>
              <Link href="/church">
                <Button variant="secondary" className="w-full">Church Info</Button>
              </Link>
            </Card>

            {/* Cell Card */}
            <Card className="text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Cell (Chariot)</h3>
              <p className="text-gray-600 mb-6">
                Small group meetings for intimate fellowship, prayer, and discipleship in homes across Ughelli.
              </p>
              <Link href="/cell">
                <Button variant="accent" className="w-full">Join a Cell</Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  )
}