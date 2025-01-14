import { useState } from 'react'
import { ArrowUpRight } from "lucide-react"

export default function UserProfile() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Project Manager',
    bio: 'Experienced project manager with a passion for delivering successful projects.',
  })

  const [isEditing, setIsEditing] = useState(false)

  const handleInputChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsEditing(false)
    console.log('Updated profile:', profile)
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex justify-center items-center">
      <div className="w-full max-w-md px-8 py-12 border border-white/10 backdrop-blur-md">
        <h2 className="text-3xl font-thin tracking-wide mb-8 text-center">
          User Profile
          <span className="block mt-2 text-violet-400 text-lg font-light">
            {isEditing ? 'Edit your information' : 'View your information'}
          </span>
        </h2>

        {isEditing ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-6 py-4 bg-transparent border border-white/10 rounded-none focus:outline-none focus:ring-1 focus:ring-violet-400 text-sm"
                onChange={handleInputChange}
                value={profile.name}
                placeholder="Name"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-6 py-4 bg-transparent border border-white/10 rounded-none focus:outline-none focus:ring-1 focus:ring-violet-400 text-sm"
                onChange={handleInputChange}
                value={profile.email}
                placeholder="Email"
              />
            </div>
            <div className="relative">
              <input
                type="text"
                id="role"
                name="role"
                required
                className="w-full px-6 py-4 bg-transparent border border-white/10 rounded-none focus:outline-none focus:ring-1 focus:ring-violet-400 text-sm"
                onChange={handleInputChange}
                value={profile.role}
                placeholder="Role"
              />
            </div>
            <div className="relative">
              <textarea
                id="bio"
                name="bio"
                rows={3}
                className="w-full px-6 py-4 bg-transparent border border-white/10 rounded-none focus:outline-none focus:ring-1 focus:ring-violet-400 text-sm"
                onChange={handleInputChange}
                value={profile.bio}
                placeholder="Bio"
              />
            </div>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="w-full px-6 py-4 border border-white/10 text-sm tracking-wider hover:bg-white/5 transition-colors duration-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="group w-full relative px-6 py-4 bg-gradient-to-r from-purple-400 to-yellow-300 text-blue-800 text-sm tracking-wider transition-all duration-300"
              >
                Save Changes
                <ArrowUpRight className="inline-block ml-2 w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-6">
            <div className="border border-white/10 px-6 py-4">
              <h3 className="text-violet-400 text-sm font-light mb-1">Name</h3>
              <p className="text-sm">{profile.name}</p>
            </div>
            <div className="border border-white/10 px-6 py-4">
              <h3 className="text-violet-400 text-sm font-light mb-1">Email</h3>
              <p className="text-sm">{profile.email}</p>
            </div>
            <div className="border border-white/10 px-6 py-4">
              <h3 className="text-violet-400 text-sm font-light mb-1">Role</h3>
              <p className="text-sm">{profile.role}</p>
            </div>
            <div className="border border-white/10 px-6 py-4">
              <h3 className="text-violet-400 text-sm font-light mb-1">Bio</h3>
              <p className="text-sm">{profile.bio}</p>
            </div>
            <button
              onClick={() => setIsEditing(true)}
              className="group w-full relative px-6 py-4 bg-gradient-to-r from-purple-400 to-yellow-300 text-blue-800 text-sm tracking-wider transition-all duration-300"
            >
              Edit Profile
              <ArrowUpRight className="inline-block ml-2 w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}