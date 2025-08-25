import { useState } from "react";
import {
  MousePointer2,
  Hand,
  Pencil,
  Eraser,
  Type,
  Crop,
  Square,
  Circle,
  Play,
  Diamond,
  Star,
  Heart,
  PlayCircle,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const TOOL_ICONS = [
  { icon: <MousePointer2 />, label: "Select" },
  { icon: <Hand />, label: "Hand" },
  { icon: <Pencil />, label: "Draw" },
  { icon: <Eraser />, label: "Erase" },
  { icon: <Type />, label: "Text" },
  { icon: <Crop />, label: "Crop" },
];

const SHAPE_ICONS = [
  { icon: <Square />, label: "Square" },
  { icon: <Circle />, label: "Circle" },
  { icon: <Play />, label: "Triangle" },
  { icon: <Diamond />, label: "Diamond" },
  { icon: <Star />, label: "Star" },
  { icon: <Heart />, label: "Heart" },
];

const WORKFLOW_ELEMENTS = [
  { icon: <PlayCircle />, label: "Start" },
  { icon: <Settings />, label: "Process" },
  { icon: <Diamond />, label: "Decision" },
];

const LeftSideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`bg-white border-r border-gray-200 p-4 flex flex-col transition-all duration-300 ${
        collapsed ? "w-12" : "w-64"
      } relative`}>
      {/* Collapse/Expand Button */}
      <button
        className="absolute top-1/2 right-[-16px] bg-gray-100 border border-gray-300 rounded-full p-1 shadow hover:bg-gray-200 transition cursor-pointer"
        onClick={() => setCollapsed((prev) => !prev)}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}>
        {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
      </button>

      {/* Sidebar Content */}
      {!collapsed && (
        <div className="flex flex-col gap-6">
          {/* Tools */}
          <div>
            <h2 className="text-sm font-semibold text-gray-700 mb-2">Tools</h2>
            <div className="grid grid-cols-6 gap-2 mb-2">
              {TOOL_ICONS.map((tool, idx) => (
                <button
                  key={idx}
                  className="flex flex-col items-center justify-center p-2 rounded hover:bg-gray-100 transition cursor-pointer"
                  title={tool.label}
                  aria-label={tool.label}>
                  <span className="text-gray-600">{tool.icon}</span>
                </button>
              ))}
            </div>
          </div>
          {/* Basic Shapes */}
          <div>
            <h2 className="text-sm font-semibold text-gray-700 mb-2">
              Basic Shapes
            </h2>
            <div className="grid grid-cols-6 gap-2 mb-2">
              {SHAPE_ICONS.map((shape, idx) => (
                <button
                  key={idx}
                  className="flex flex-col items-center justify-center p-2 rounded hover:bg-gray-100 transition cursor-pointer"
                  title={shape.label}
                  aria-label={shape.label}>
                  <span className="text-gray-600">{shape.icon}</span>
                </button>
              ))}
            </div>
          </div>
          {/* Workflow Elements */}
          <div>
            <h2 className="text-sm font-semibold text-gray-700 mb-2">
              Workflow Elements
            </h2>
            <div className="flex flex-col gap-2">
              {WORKFLOW_ELEMENTS.map((el, idx) => (
                <button
                  key={idx}
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 transition cursor-pointer"
                  title={el.label}
                  aria-label={el.label}>
                  <span className="text-gray-600">{el.icon}</span>
                  <span className="text-gray-700 text-sm">{el.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default LeftSideBar;
