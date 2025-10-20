import Layout from '../../components/Layout'
import Card from '../../components/Card'
import Link from 'next/link'
import Button from '../../components/Button'

export default function Cell() {
  const cellGroups = [
    { area: "Ughelli Central", leader: "Bro. Johnson", members: 12, day: "Tuesday" },
    { area: "Ughelli South", leader: "Sis. Grace", members: 8, day: "Wednesday" },
    { area: "Ughelli North", leader: "Bro. David", members: 15, day: "Thursday" },
    { area: "Oteri Zone", leader: "Sis. Faith", members: 10, day: "Friday" }
  ]
  
  return (
    <Layout>
      <div className="bg-accent text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Cell Groups (Chariots)</h1>
          <p className="text-xl">Small groups, big impact</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <h2 className="text-2xl font-bold mb-6">About Cell Groups</h2>
              <p className="text-gray-600 mb-6">
                Our Cell Groups, also known as "Chariots," are small fellowship groups that meet 
                in homes across Ughelli. These groups provide intimate settings for prayer, 
                Bible study, and mutual encouragement.
              </p>
              
              <Link href="/cell/join">
                <Button variant="accent">Join a Cell Group</Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}