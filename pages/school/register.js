import { useState } from 'react'
import Layout from '../../components/Layout'
import Button from '../../components/Button'
import Card from '../../components/Card'

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    program: '',
    address: ''
  })
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Registration form submitted! Backend integration will be added in the next phase.')
    // Form submission logic will be added in backend phase
  }
  
  return (
    <Layout>
      <div className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">School Registration</h1>
          <p className="text-xl">Join our Bible School program today</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <Card>
          <h2 className="text-2xl font-bold mb-6">Registration Form</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Program of Interest *
                </label>
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">Select a program</option>
                  <option value="certificate">Certificate in Biblical Studies</option>
                  <option value="diploma">Diploma in Theology</option>
                  <option value="leadership">Leadership Training</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Residential Address
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="agree"
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                required
              />
              <label htmlFor="agree" className="ml-2 block text-sm text-gray-700">
                I agree to the terms and conditions of the Bible School
              </label>
            </div>

            <div className="flex gap-4">
              <Button type="submit" variant="primary">
                Submit Registration
              </Button>
              <Button type="button" variant="outline">
                Clear Form
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </Layout>
  )
}