import React, { useState } from "react";
import { Building2, Plus, ArrowUpRight } from "lucide-react";

const CreateOrg = () => {
  const [orgName, setOrgName] = useState("");
  const [createdOrgName, setCreatedOrgName] = useState([]);

  const handleCreateOrg = (e) => {
    e.preventDefault();
    if (orgName) {
      setCreatedOrgName([...createdOrgName, orgName]);
      setOrgName("");
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-12">
          <div>
            <h1 className="text-3xl font-thin tracking-wide text-white">
              Create new Organization
            </h1>
            <p className="text-gray-400 mt-1 font-light">
              Create and manage your organization
            </p>
          </div>
          <button className="group px-6 py-2 bg-gradient-to-r from-purple-400 to-yellow-300 text-blue-800 text-sm tracking-wider transition-all duration-300">
            <Plus className="w-4 h-4 inline-block mr-2" />
            New Organization
            <ArrowUpRight className="inline-block ml-2 w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Create Organization Card */}
          <div className="border border-white/10 backdrop-blur-md rounded-lg p-6 space-y-4">
            <div className="space-y-1">
              <h2 className="text-violet-400 flex items-center gap-2 text-xl font-thin">
                <Building2 className="w-5 h-5" />
                Create Organization
              </h2>
              <p className="text-gray-400 text-sm font-light">
                Set up a new organization and start collaborating
              </p>
            </div>
            <form onSubmit={handleCreateOrg} className="space-y-4">
              <div>
                <label className="block text-sm font-thin text-gray-300 mb-1">
                  Organization Name
                </label>
                <input
                  type="text"
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  placeholder="Enter organization name"
                  className="w-full px-6 py-4 bg-transparent border border-white/10 rounded-none focus:outline-none focus:ring-1 focus:ring-violet-400 text-sm text-white"
                />
              </div>
              <button
                type="submit"
                className="group w-full px-12 py-4 bg-gradient-to-r from-purple-400 to-yellow-300 text-blue-800 text-sm tracking-wider transition-all duration-300"
              >
                Create Organization
                <ArrowUpRight className="inline-block ml-2 w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </button>
            </form>
            {/* Invited Members List */}
            <div className="mt-4">
              <h3 className="text-sm font-thin text-gray-300 mb-2">
                Created Organizations
              </h3>
              <div className="space-y-2">
                {createdOrgName.map((org, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 border border-white/10 p-3 text-gray-300 font-light"
                  >
                    <Building2 className="w-4 h-4 text-violet-400" />
                    <span>{org}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Invite Members Card */}
        </div>
      </div>
    </div>
  );
};

export default CreateOrg;
