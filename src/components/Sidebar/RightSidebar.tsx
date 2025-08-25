import { useState } from "react";
import { ChevronLeft, ChevronRight, Diamond } from "lucide-react";

const RightSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  // Example selected element data
  const selectedElement = {
    id: "node_decision_001",
    label: "Decision Node",
    icon: <Diamond className="w-6 h-6 text-gray-600" />,
    x: 384,
    y: 12,
    width: 80,
    height: 80,
    fillColor: "#eab308",
    borderColor: "#ffffff",
    borderWidth: 4,
    opacity: 100,
    shadow: true,
  };

  return (
    <aside
      className={`bg-white border-l border-gray-200 p-4 flex flex-col transition-all duration-300 ${
        collapsed ? "w-12" : "w-80"
      } relative`}>
      {/* Collapse/Expand Button */}
      <button
        className="absolute top-1/2 left-[-16px] bg-gray-100 border border-gray-300 rounded-full p-1 shadow hover:bg-gray-200 transition cursor-pointer"
        onClick={() => setCollapsed((prev) => !prev)}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}>
        {collapsed ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
      </button>

      {/* Sidebar Content */}
      {!collapsed && (
        <div className="flex flex-col gap-6">
          <h2 className="text-base font-semibold text-gray-700 mb-2">
            Properties
          </h2>
          {/* Selected Element */}
          <div className="bg-gray-50 rounded-lg p-3 mb-4 flex items-center gap-3">
            <span>{selectedElement.icon}</span>
            <div>
              <div className="font-medium text-gray-800">
                {selectedElement.label}
              </div>
              <div className="text-xs text-gray-500">
                ID: {selectedElement.id}
              </div>
            </div>
          </div>
          {/* Position & Size */}
          <div className="mb-4">
            <div className="font-semibold text-sm text-gray-700 mb-2">
              Position & Size
            </div>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <div>
                <label className="block text-xs text-gray-500 mb-1">X</label>
                <input
                  type="number"
                  className="w-full border rounded px-2 py-1 text-sm"
                  value={selectedElement.x}
                  readOnly
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Y</label>
                <input
                  type="number"
                  className="w-full border rounded px-2 py-1 text-sm"
                  value={selectedElement.y}
                  readOnly
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  Width
                </label>
                <input
                  type="number"
                  className="w-full border rounded px-2 py-1 text-sm"
                  value={selectedElement.width}
                  readOnly
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  Height
                </label>
                <input
                  type="number"
                  className="w-full border rounded px-2 py-1 text-sm"
                  value={selectedElement.height}
                  readOnly
                />
              </div>
            </div>
          </div>
          {/* Appearance */}
          <div className="mb-4">
            <div className="font-semibold text-sm text-gray-700 mb-2">
              Appearance
            </div>
            <div className="mb-2">
              <label className="block text-xs text-gray-500 mb-1">
                Fill Color
              </label>
              <input
                type="text"
                className="w-full border rounded px-2 py-1 text-sm"
                value={selectedElement.fillColor}
                readOnly
              />
            </div>
            <div className="mb-2">
              <label className="block text-xs text-gray-500 mb-1">
                Border Color
              </label>
              <input
                type="text"
                className="w-full border rounded px-2 py-1 text-sm"
                value={selectedElement.borderColor}
                readOnly
              />
            </div>
            <div className="mb-2">
              <label className="block text-xs text-gray-500 mb-1">
                Border Width
              </label>
              <input
                type="range"
                min={0}
                max={10}
                value={selectedElement.borderWidth}
                readOnly
                className="w-full"
              />
              <div className="text-xs text-gray-500 text-right">
                {selectedElement.borderWidth}px
              </div>
            </div>
            <div className="mb-2">
              <label className="block text-xs text-gray-500 mb-1">
                Opacity
              </label>
              <input
                type="range"
                min={0}
                max={100}
                value={selectedElement.opacity}
                readOnly
                className="w-full"
              />
              <div className="text-xs text-gray-500 text-right">
                {selectedElement.opacity}%
              </div>
            </div>
          </div>
          {/* Shadow */}
          <div>
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={selectedElement.shadow}
                readOnly
              />
              Enable Shadow
            </label>
          </div>
        </div>
      )}
    </aside>
  );
};

export default RightSidebar;
