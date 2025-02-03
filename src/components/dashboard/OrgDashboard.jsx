import { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { FiRefreshCw, FiSun, FiMoon } from "react-icons/fi";

// Need to install npm install react-dnd react-dnd-html5-backend chart.js react-chartjs-2 react-icons
// Widget data
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
      className={`bg-gray-800 rounded-lg p-4 border border-gray-700 ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      {children}
    </div>
  );
};

const OrgDashboard = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [widgets, setWidgets] = useState(initialWidgets);

  const handleMove = (fromId, toId) => {
    const fromIndex = widgets.findIndex((w) => w.id === fromId);
    const toIndex = widgets.findIndex((w) => w.id === toId);
    const newWidgets = [...widgets];
    newWidgets.splice(toIndex, 0, newWidgets.splice(fromIndex, 1)[0]);
    setWidgets(newWidgets);
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <header className="p-4 bg-gray-800 flex justify-between items-center">
        <h1 className="text-xl font-bold">Project Dashboard</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
          <button className="p-2 rounded-lg bg-blue-600 hover:bg-blue-500">
            <FiRefreshCw />
          </button>
        </div>
      </header>

      <DndProvider backend={HTML5Backend}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {widgets.map((widget) => (
            <DraggableWidget key={widget.id} id={widget.id} onMove={handleMove}>
              <div className="h-64">
                <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
                  {widget.title}
                </h3>
                {widget.type === "sprint" && (
                  <div className="space-y-4">
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div
                        className="h-full bg-blue-600 rounded-full"
                        style={{ width: `${widget.content.progress}%` }}
                      />
                    </div>
                    <p className="text-sm text-gray-400">
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
                          borderColor: "#2563eb",
                          tension: 0.4,
                        },
                      ],
                    }}
                    options={{
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          labels: {
                            color: darkMode ? "#fff" : "#000",
                          },
                        },
                      },
                      scales: {
                        x: {
                          ticks: { color: darkMode ? "#fff" : "#000" },
                          grid: { color: darkMode ? "#374151" : "#e5e7eb" },
                        },
                        y: {
                          ticks: { color: darkMode ? "#fff" : "#000" },
                          grid: { color: darkMode ? "#374151" : "#e5e7eb" },
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
                        color: "text-blue-400",
                      },
                      {
                        title: "Feature: User profile",
                        status: "In Progress",
                        color: "text-yellow-400",
                      },
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="p-2 bg-gray-700 rounded flex justify-between items-center"
                      >
                        <span>{item.title}</span>
                        <span className={`${item.color} text-sm`}>
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
