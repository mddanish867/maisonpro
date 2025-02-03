import React, { useState } from "react";
import {
  ChevronRight,
  Plus,
  Layout,
  FileText,
  LayoutDashboard,
  Book,
  Trello,
  GitFork,
  Building2,
  Building,
  Package,
  Settings,
  Search,
  Bell,
  ShoppingBag,
  HelpCircle,
  Settings as SettingsIcon,
  Users,
  Star,
} from "lucide-react";

const ProjectDashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState("Summary");

  const navigation = [
    { id: "overview", label: "Overview", icon: Layout },
    { id: "summary", label: "Summary", icon: FileText },
    { id: "dashboards", label: "Dashboards", icon: LayoutDashboard },
    { id: "wiki", label: "Wiki", icon: Book },
    { id: "boards", label: "Boards", icon: Trello },
    { id: "repos", label: "Repos", icon: GitFork },
    { id: "pipelines", label: "Pipelines", icon: Building2 },
    { id: "testplans", label: "Test Plans", icon: Building },
    { id: "artifacts", label: "Artifacts", icon: Package },
    { id: "projectsettings", label: "Project settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex">
      {/* Sidebar */}
      <div
        className={`border-r border-white/10 ${
          isCollapsed ? "w-16" : "w-64"
        } transition-all duration-300`}
      >
        {/* Project Header */}
        <div className="p-4 border-b border-white/10 flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-600 flex items-center justify-center text-white">
            T
          </div>
          {!isCollapsed && (
            <div className="flex items-center justify-between flex-1">
              <span>Test</span>
              <Plus className="w-4 h-4" />
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="py-4">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.label)}
              className={`w-full flex items-center gap-3 px-4 py-2 hover:bg-white/5 transition-colors
                ${currentPage === item.label ? "bg-white/10" : ""}`}
            >
              <item.icon className="w-5 h-5" />
              {!isCollapsed && <span>{item.label}</span>}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Navigation */}
        <div className="border-b border-white/10 p-4">
          <div className="flex items-center justify-between">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm">
              <span>DanishFaiyaz2003</span>
              <ChevronRight className="w-4 h-4" />
              <span>Test</span>
              <ChevronRight className="w-4 h-4" />
              <span>Overview</span>
              <ChevronRight className="w-4 h-4" />
              <span>Summary</span>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-1.5 bg-transparent border border-white/10 focus:outline-none focus:ring-1 focus:ring-violet-400 text-sm"
                />
              </div>
              <Bell className="w-5 h-5" />
              <ShoppingBag className="w-5 h-5" />
              <HelpCircle className="w-5 h-5" />
              <SettingsIcon className="w-5 h-5" />
              <div className="w-8 h-8 rounded-full bg-purple-700 flex items-center justify-center">
                DF
              </div>
            </div>
          </div>
        </div>

        {/* Content Header */}
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-600 flex items-center justify-center text-white text-xl">
              T
            </div>
            <h1 className="text-2xl">Test</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 border border-white/10 flex items-center gap-2 hover:bg-white/5">
              <Users className="w-4 h-4" />
              Private
            </button>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition-colors">
              Invite
            </button>
            <button className="p-2 border border-white/10 hover:bg-white/5">
              <Star className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="p-8 flex justify-center items-center">
          <div className="text-center">
            <img
              src="/api/placeholder/600/400"
              alt="Welcome illustration"
              className="max-w-md mx-auto mb-8"
            />
            <h2 className="text-3xl font-light mb-4">
              Welcome to the project!
            </h2>
            <p className="text-gray-400 mb-8">
              What service would you like to start with?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDashboard;
