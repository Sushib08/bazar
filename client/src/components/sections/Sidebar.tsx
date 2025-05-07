import React from "react";
import Search from "../elements/Search";
import NavLinksList from "../elements/NavLinksList";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 z-50`}
    >
      <div className="flex justify-end p-4">
        <button onClick={toggleSidebar} className="text-gray-700">
          &times;
        </button>
      </div>
      <nav className="flex flex-col space-y-4 p-4">
        <div className="block xs:hidden">
          <Search />
        </div>

        <NavLinksList onClick={toggleSidebar} />
      </nav>
    </div>
  );
};

export default Sidebar;
