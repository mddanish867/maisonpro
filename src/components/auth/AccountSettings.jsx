import { useState } from 'react'

export default function AccountSettings() {
  const [settings, setSettings] = useState({
    email: 'john.doe@example.com',
    password: '',
    notifications: true,
    twoFactor: false,
  })

  const handleInputChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setSettings({ ...settings, [e.target.name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the updated settings to your backend
    console.log('Updated settings:', settings)
  }

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Account Settings</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={handleInputChange}
              value={settings.email}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={handleInputChange}
              value={settings.password}
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="notifications"
              name="notifications"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              onChange={handleInputChange}
              checked={settings.notifications}
            />
            <label htmlFor="notifications" className="ml-2 block text-sm text-gray-900">
              Receive email notifications
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="twoFactor"
              name="twoFactor"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              onChange={handleInputChange}
              checked={settings.twoFactor}
            />
            <label htmlFor="twoFactor" className="ml-2 block text-sm text-gray-900">
              Enable two-factor authentication
            </label>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  )
}