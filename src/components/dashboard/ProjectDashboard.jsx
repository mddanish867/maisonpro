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
  Menu,
  X,
} from "lucide-react";

const ProjectDashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col lg:flex-row">
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-[#0A0A0A] border border-white/10 rounded-lg"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6 text-violet-400" />
        ) : (
          <Menu className="w-6 h-6 text-violet-400" />
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:relative z-40 h-full border-r border-white/10 bg-[#0A0A0A] transition-all duration-300 ${
          isCollapsed ? "w-16" : "w-64"
        }`}
      >
        {/* Project Header */}
        <div className="p-4 border-b border-white/10 flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-yellow-300 flex items-center justify-center text-blue-800">
            T
          </div>
          {!isCollapsed && (
            <div className="flex items-center justify-between flex-1">
              <span className="font-thin">Test</span>
              <Plus className="w-4 h-4 text-violet-400" />
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="py-4">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentPage(item.label);
                setIsMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-2 hover:bg-white/5 transition-colors font-extralight
                ${currentPage === item.label ? "bg-white/10" : ""}`}
            >
              <item.icon className="w-5 h-5 text-violet-400" />
              {!isCollapsed && <span>{item.label}</span>}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full">
        {/* Top Navigation */}
        <div className="border-b border-white/10 p-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm font-extralight overflow-x-auto">
              <span>DanishFaiyaz2003</span>
              <ChevronRight className="w-4 h-4" />
              <span>Test</span>
              <ChevronRight className="w-4 h-4" />
              <span>Overview</span>
              <ChevronRight className="w-4 h-4" />
              <span>Summary</span>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4 overflow-x-auto">
              <div className="relative flex-1 md:flex-none">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full md:w-auto pl-10 pr-4 py-1.5 bg-transparent border border-white/10 focus:outline-none focus:ring-1 focus:ring-violet-400 text-sm"
                />
              </div>
              <div className="flex items-center gap-4">
                <Bell className="w-5 h-5 text-violet-400" />
                <ShoppingBag className="w-5 h-5 text-violet-400" />
                <HelpCircle className="w-5 h-5 text-violet-400" />
                <SettingsIcon className="w-5 h-5 text-violet-400" />
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-yellow-300 flex items-center justify-center text-blue-800">
                  DF
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Header */}
        <div className="p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-yellow-300 flex items-center justify-center text-blue-800 text-xl">
              T
            </div>
            <h1 className="text-2xl font-thin">Test</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 border border-white/10 flex items-center gap-2 hover:bg-white/5 font-extralight">
              <Users className="w-4 h-4 text-violet-400" />
              Private
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-purple-400 to-yellow-300 text-blue-800 hover:opacity-90 transition-opacity font-extralight">
              Invite
            </button>
            <button className="p-2 border border-white/10 hover:bg-white/5">
              <Star className="w-4 h-4 text-violet-400" />
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="p-4 md:p-8 flex justify-center items-center">
          <div className="text-center">
            <img
              src="/api/placeholder/600/400"
              alt="Welcome illustration"
              className="max-w-full md:max-w-md mx-auto mb-8"
            />
            <h2 className="text-3xl font-thin mb-4">
              Welcome to the project!
            </h2>
            <p className="text-gray-400 mb-8 font-extralight">
              What service would you like to start with?
            </p>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default ProjectDashboard;