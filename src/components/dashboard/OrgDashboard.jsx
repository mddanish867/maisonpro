import { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Menu, X, RefreshCw, Moon, Sun } from "lucide-react";

const initialWidgets = [
  {
    id: 1,
    type: "sprint",
    title: "Sprint Progress",
    content: { progress: 65 },
  },
  { id: 2, type: "burn", title: "Burn Down Chart" },
  { id: 3, type: "updates", title: "Recent Updates", content: { items: 65 } },
];

const DraggableWidget = ({ id, children, onMove }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "widget",
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop({
    accept: "widget",
    hover(item) {
      if (item.id !== id) {
        onMove(item.id, id);
      }
    },
  });

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`bg-[#0A0A0A] rounded-lg p-4 border border-white/10 backdrop-blur-md ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      {children}
    </div>
  );
};

const OrgDashboard = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [widgets, setWidgets] = useState(initialWidgets);

  const handleMove = (fromId, toId) => {
    const fromIndex = widgets.findIndex((w) => w.id === fromId);
    const toIndex = widgets.findIndex((w) => w.id === toId);
    const newWidgets = [...widgets];
    newWidgets.splice(toIndex, 0, newWidgets.splice(fromIndex, 1)[0]);
    setWidgets(newWidgets);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Header */}
      <header className="p-4 border-b border-white/10 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-white/5 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-violet-400" />
            ) : (
              <Menu className="w-6 h-6 text-violet-400" />
            )}
          </button>
          <h1 className="text-xl font-thin">Project Dashboard</h1>
        </div>
        <div className="flex gap-2">
          <button className="p-2 border border-white/10 hover:bg-white/5 transition-colors">
            <Moon className="w-5 h-5 text-violet-400" />
          </button>
          <button className="p-2 bg-gradient-to-r from-purple-400 to-yellow-300 text-blue-800">
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>
      </header>

      <DndProvider backend={HTML5Backend}>
        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-y-0 left-0 transform ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } w-64 bg-[#0A0A0A] border-r border-white/10 z-40 transition-transform duration-300`}
        >
          <div className="p-4">
            <h2 className="text-lg font-thin mb-4">Dashboard Menu</h2>
            {/* Add mobile menu items here */}
          </div>
        </div>

        {/* Overlay for mobile menu */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Widgets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {widgets.map((widget) => (
            <DraggableWidget key={widget.id} id={widget.id} onMove={handleMove}>
              <div className="h-64">
                <h3 className="text-lg font-thin mb-4 border-b border-white/10 pb-2">
                  {widget.title}
                </h3>
                {widget.type === "sprint" && (
                  <div className="space-y-4">
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-400 to-yellow-300 rounded-full"
                        style={{ width: `${widget.content.progress}%` }}
                      />
                    </div>
                    <p className="text-sm text-gray-400 font-extralight">
                      {widget.content.progress}% completed (13/20 tasks)
                    </p>
                  </div>
                )}

                {widget.type === "burn" && (
                  <Line
                    data={{
                      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
                      datasets: [
                        {
                          label: "Remaining Work",
                          data: [20, 18, 15, 12, 8],
                          borderColor: "#A78BFA",
                          tension: 0.4,
                        },
                      ],
                    }}
                    options={{
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          labels: {
                            color: "#fff",
                            font: {
                              family: "system-ui",
                              weight: "300"
                            }
                          },
                        },
                      },
                      scales: {
                        x: {
                          ticks: { color: "#fff", font: { weight: "300" } },
                          grid: { color: "rgba(255, 255, 255, 0.1)" },
                        },
                        y: {
                          ticks: { color: "#fff", font: { weight: "300" } },
                          grid: { color: "rgba(255, 255, 255, 0.1)" },
                        },
                      },
                    }}
                  />
                )}

                {widget.type === "updates" && (
                  <ul className="space-y-2">
                    {[
                      {
                        title: "Bug fix: Login issue",
                        status: "Done",
                        color: "text-violet-400",
                      },
                      {
                        title: "Feature: User profile",
                        status: "In Progress",
                        color: "text-yellow-300",
                      },
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="p-2 border border-white/10 rounded flex justify-between items-center hover:bg-white/5 transition-colors"
                      >
                        <span className="font-extralight">{item.title}</span>
                        <span className={`${item.color} text-sm font-extralight`}>
                          {item.status}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </DraggableWidget>
          ))}
        </div>
      </DndProvider>
    </div>
  );
};

export default OrgDashboard;