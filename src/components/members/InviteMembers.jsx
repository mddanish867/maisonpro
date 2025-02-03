import React, { useState } from "react";
import { Users, Mail, ChevronDown } from "lucide-react";

function InviteMembers() {
  const [inviteEmail, setInviteEmail] = useState("");
  const [selectedProject, setSelectedProject] = useState("");
  const [invitedMembers, setInvitedMembers] = useState([]);

  // Sample projects - replace with your actual projects data
  const projects = [
    { id: 1, name: "Project Alpha" },
    { id: 2, name: "Project Beta" },
    { id: 3, name: "Project Gamma" }
  ];

  const handleInviteMember = (e) => {
    e.preventDefault();
    if (inviteEmail && selectedProject) {
      setInvitedMembers([...invitedMembers, {
        email: inviteEmail,
        project: selectedProject
      }]);
      setInviteEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] p-4 sm:p-6 lg:p-8">
      <div className="max-w-[500px] w-full mx-auto space-y-8">
        <div className="border border-white/10 backdrop-blur-md rounded-lg p-4 sm:p-6 space-y-4 mt-10">
          {/* Header */}
          <div className="space-y-1">
            <h2 className="text-violet-400 flex items-center gap-2 text-xl font-thin">
              <Users className="w-5 h-5" />
              Invite Members
            </h2>
            <p className="text-gray-400 text-sm font-light">
              Add team members to your organization
            </p>
          </div>

          <form onSubmit={handleInviteMember} className="space-y-4">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-thin text-gray-300 mb-1">
                Email Address
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="flex-1 px-6 py-4 bg-transparent border border-white/10 rounded-none focus:outline-none focus:ring-1 focus:ring-violet-400 text-sm text-white"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-4 sm:py-0 bg-gradient-to-r from-purple-400 to-yellow-300 text-blue-800 hover:opacity-90 transition-opacity"
                >
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Project Dropdown */}
            <div>
              <label className="block text-sm font-thin text-gray-300 mb-1">
                Select Project
              </label>
              <div className="relative">
                <select
                  value={selectedProject}
                  onChange={(e) => setSelectedProject(e.target.value)}
                  className="w-full px-6 py-4 bg-transparent border border-white/10 rounded-none focus:outline-none focus:ring-1 focus:ring-violet-400 text-sm text-white appearance-none"
                  required
                >
                  <option value="" className="bg-[#0A0A0A]">Select a project</option>
                  {projects.map((project) => (
                    <option 
                      key={project.id} 
                      value={project.name}
                      className="bg-[#0A0A0A]"
                    >
                      {project.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Invited Members List */}
            <div className="mt-4">
              <h3 className="text-sm font-thin text-gray-300 mb-2">
                Invited Members
              </h3>
              <div className="space-y-2">
                {invitedMembers.map((member, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center gap-2 border border-white/10 p-3 text-gray-300 font-light"
                  >
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-violet-400" />
                      <span className="text-sm">{member.email}</span>
                    </div>
                    <div className="ml-0 sm:ml-auto text-xs text-violet-400">
                      {member.project}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InviteMembers;