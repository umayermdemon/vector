import {
  FolderOpenDot,
  Forward,
  HardDriveDownload,
  RedoDot,
  Save,
  UndoDot,
  VectorSquare,
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Button } from "../ui/button";

const iconClass = "w-5 h-5 text-[#4b5563]";

const leftItem = [
  {
    icon: <FolderOpenDot className={iconClass} />,
    title: "Open",
  },
  {
    icon: <Save className={iconClass} />,
    title: "Save",
  },
  {
    icon: <HardDriveDownload className={iconClass} />,
    title: "Export",
  },
];

const undoRedo = [
  {
    icon: <UndoDot className={iconClass} />,
    title: "Undo",
  },
  {
    icon: <RedoDot className={iconClass} />,
    title: "Redo",
  },
];

const Navbar = () => {
  return (
    <div className="flex items-center justify-between border-b border-gray-300 h-16 px-4">
      {/* left items */}
      <div className="flex-1 flex items-center gap-4">
        {/* logo */}
        <div className="flex items-center gap-2 p-4">
          <span className="bg-[#4b5563] p-2 rounded text-white ">
            <VectorSquare className="w-5 h-5" />
          </span>
          <h2 className="text-2xl font-bold text-[#4b5563] border-r-2 border-gray-400 pr-2">
            Vector
          </h2>
        </div>
        {/* open, save, export */}
        <div className="flex gap-2">
          {leftItem.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
              {item.icon}
              <h3 className="text-[#4b5563] font-medium text-sm">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
      {/* right items */}
      <div className="flex items-center">
        {/* undo, redo */}
        <div className="flex items-center gap-4 border-r-2 border-gray-300 pr-4">
          {undoRedo.map((item) => (
            <Tooltip>
              <TooltipTrigger asChild className="cursor-pointer">
                {item.icon}
              </TooltipTrigger>
              <TooltipContent className="text-sm bg-[#4b5563]">
                {item.title}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>

        {/* zoom */}
        <div className="flex items-center gap-4 pl-4 border-r-2 border-gray-300 pr-4 ">
          <h3 className="text-[#4b5563] font-medium text-base">Zoom:</h3>
          <button className="text-2xl cursor-pointer">-</button>

          <button className="border border-gray-300 rounded p-1 text-base">
            100%
          </button>

          <button className="text-xl cursor-pointer">+</button>
        </div>

        {/* share button */}
        <div className="flex items-center gap-4 pl-4">
          <Button className="bg-[#4b5563] font-medium text-base text-white cursor-pointer">
            <span>
              <Forward />
            </span>
            Share
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
