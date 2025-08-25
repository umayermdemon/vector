import { useState } from "react";
import {
  FolderOpenDot,
  Forward,
  HardDriveDownload,
  RedoDot,
  Save,
  UndoDot,
  VectorSquare,
  Menu,
  X,
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Button } from "../ui/button";

// Constants
const ICON_CLASS = "w-5 h-5 text-[#4b5563]";

const NAV_ITEMS = [
  { icon: <FolderOpenDot className={ICON_CLASS} />, title: "Open" },
  { icon: <Save className={ICON_CLASS} />, title: "Save" },
  { icon: <HardDriveDownload className={ICON_CLASS} />, title: "Export" },
];

const UNDO_REDO_ITEMS = [
  { icon: <UndoDot className={ICON_CLASS} />, title: "Undo" },
  { icon: <RedoDot className={ICON_CLASS} />, title: "Redo" },
];

// Logo Components
function Logo() {
  return (
    <div className="flex items-center gap-2 p-2 md:p-4">
      <span className="bg-[#4b5563] p-2 rounded text-white">
        <VectorSquare className="w-5 h-5" />
      </span>
      <h2 className="text-xl md:text-2xl font-bold text-[#4b5563] border-r-2 border-gray-400 pr-4 md:pr-6">
        Vector
      </h2>
    </div>
  );
}

function DesktopNavItems() {
  return (
    <div className="hidden md:flex gap-2">
      {NAV_ITEMS.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
          {item.icon}
          <h3 className="text-[#4b5563] font-medium text-sm hidden md:block">
            {item.title}
          </h3>
        </div>
      ))}
    </div>
  );
}

function DesktopUndoRedoZoomShare() {
  return (
    <div className="hidden md:flex items-center">
      {/* Undo/Redo */}
      <div className="flex items-center gap-4 border-r-2 border-gray-300 pr-4">
        {UNDO_REDO_ITEMS.map((item, idx) => (
          <Tooltip key={idx}>
            <div className="hover:bg-gray-100 p-2 rounded">
              <TooltipTrigger asChild className="cursor-pointer">
                {item.icon}
              </TooltipTrigger>
            </div>
            <TooltipContent className="text-sm bg-[#4b5563]">
              {item.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
      {/* Zoom */}
      <div className="flex items-center gap-4 pl-4 border-r-2 border-gray-300 pr-4">
        <h3 className="text-[#4b5563] font-medium text-base">Zoom:</h3>
        <button className="text-2xl cursor-pointer">-</button>
        <button className="border border-gray-300 rounded p-1 text-base">
          100%
        </button>
        <button className="text-xl cursor-pointer">+</button>
      </div>
      {/* Share */}
      <div className="flex items-center gap-4 pl-4">
        <Button className="bg-[#4b5563] font-medium text-base text-white cursor-pointer flex gap-2 items-center">
          <Forward />
          Share
        </Button>
      </div>
    </div>
  );
}

function MobileUndoRedoZoom() {
  return (
    <div className="flex items-center gap-2 md:hidden">
      {/* Undo/Redo */}
      <div className="flex items-center gap-2">
        {UNDO_REDO_ITEMS.map((item, idx) => (
          <button
            key={idx}
            className="hover:bg-gray-100 p-2 rounded"
            aria-label={item.title}>
            {item.icon}
          </button>
        ))}
      </div>
      {/* Zoom */}
      <div className="flex items-center gap-2 ml-2">
        <button className="text-2xl cursor-pointer" aria-label="Zoom out">
          -
        </button>
        <button
          className="border border-gray-300 rounded p-1 text-base"
          aria-label="Zoom level">
          100%
        </button>
        <button className="text-xl cursor-pointer" aria-label="Zoom in">
          +
        </button>
      </div>
    </div>
  );
}

function MobileMenuButton({
  open,
  toggle,
}: {
  open: boolean;
  toggle: () => void;
}) {
  return (
    <div className="md:hidden flex items-center ml-2">
      <button className="p-2" onClick={toggle} aria-label="Toggle menu">
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
    </div>
  );
}

function MobileMenuDropdown({ open }: { open: boolean }) {
  if (!open) return null;
  return (
    <div className="absolute top-16 left-0 w-full bg-white shadow-md z-50 flex flex-col md:hidden">
      <div className="flex flex-col gap-2 p-4 border-b border-gray-200">
        {NAV_ITEMS.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
            {item.icon}
            <h3 className="text-[#4b5563] font-medium text-sm">{item.title}</h3>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4 p-4">
        <Button className="bg-[#4b5563] font-medium text-base text-white cursor-pointer flex gap-2 items-center w-full justify-center">
          <Forward />
          Share
        </Button>
      </div>
    </div>
  );
}

// Main Navbar
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between border-b border-gray-300 h-16 px-2 md:px-4 relative">
      {/* Left: Logo & Desktop Nav */}
      <div className="flex items-center">
        <Logo />
        <DesktopNavItems />
      </div>
      {/* Mobile: Undo/Redo & Zoom */}
      <MobileUndoRedoZoom />
      {/* Mobile: Hamburger */}
      <MobileMenuButton
        open={mobileMenuOpen}
        toggle={() => setMobileMenuOpen((prev) => !prev)}
      />
      {/* Desktop: Undo/Redo, Zoom, Share */}
      <DesktopUndoRedoZoomShare />
      {/* Mobile: Dropdown */}
      <MobileMenuDropdown open={mobileMenuOpen} />
    </div>
  );
};

export default Navbar;
