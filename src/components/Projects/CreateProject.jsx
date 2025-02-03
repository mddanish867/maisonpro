import React, { useState } from "react";
import { Plus, Globe, Lock } from "lucide-react";

const CreateProject = () => {
  const [formData, setFormData] = useState({
    projectName: "",
    description: "",
    visibility: "private",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex justify-center items-center p-4">
      <div className="w-full max-w-xl px-4 py-10 border border-white/10 backdrop-blur-md rounded-lg mt-20">
        <h1 className="text-3xl font-thin mb-8">
          Create a project to get started
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Project Name */}
          <div className="space-y-2">
            <label className="block text-sm font-light">
              Project name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              placeholder="Test"
              className="w-full px-6 py-4 bg-transparent border border-white/10 rounded-none focus:outline-none focus:ring-1 focus:ring-violet-400 text-sm"
              required
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="block text-sm font-light">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              rows={4}
              className="w-full px-6 py-4 bg-transparent border border-white/10 rounded-none focus:outline-none focus:ring-1 focus:ring-violet-400 text-sm"
            />
          </div>

          {/* Visibility */}
          <div className="space-y-4">
            <label className="block text-sm font-light">Visibility</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Public Option */}
              <div
                className={`flex items-start gap-4 p-4 border transition-colors 
            ${
              formData.visibility === "public"
                ? "border-violet-400 bg-white/5"
                : "border-white/10 hover:border-violet-400/50"
            }`}
              >
                <input
                  type="radio"
                  name="visibility"
                  value="public"
                  checked={formData.visibility === "public"}
                  onChange={handleChange}
                  className="mt-1"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <Globe
                      className={`w-4 h-4 ${
                        formData.visibility === "public"
                          ? "text-violet-400"
                          : ""
                      }`}
                    />
                    <span className="font-medium">Public</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">
                    Anyone on the internet can view the project. Certain
                    features like TFVC are not supported.
                  </p>
                </div>
              </div>

              {/* Private Option */}
              <div
                className={`flex items-start gap-4 p-4 border transition-colors 
            ${
              formData.visibility === "private"
                ? "border-violet-400 bg-white/5"
                : "border-white/10 hover:border-violet-400/50"
            }`}
              >
                <input
                  type="radio"
                  name="visibility"
                  value="private"
                  checked={formData.visibility === "private"}
                  onChange={handleChange}
                  className="mt-1"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <Lock
                      className={`w-4 h-4 ${
                        formData.visibility === "private"
                          ? "text-violet-400"
                          : ""
                      }`}
                    />
                    <span className="font-medium">Private</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">
                    Only people you give access to will be able to view this
                    project.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Message */}
          <p className="text-sm text-gray-400">
            Public projects are disabled for your organization. You can turn on
            public visibility with{" "}
            <a href="#" className="text-violet-400 hover:underline">
              organization policies
            </a>
            .
          </p>

          {/* Advanced Toggle */}

          {/* Create Project Button */}
          <button className="group w-full relative px-12 py-4 bg-gradient-to-r from-purple-400 to-yellow-300 text-blue-800 text-sm font-medium tracking-wider transition-all duration-300 hover:opacity-90">
            CONTINUE
            <Plus className="inline-block ml-2 w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProject;
