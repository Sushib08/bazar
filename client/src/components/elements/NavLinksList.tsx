import React from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../data/navLinks";

interface NavLinksListProps {
  onClick?: () => void;
  className?: string;
}

const NavLinksList: React.FC<NavLinksListProps> = ({ onClick, className }) => {
  return (
    <>
      {navLinks.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            isActive
              ? `${className ?? ""} text-green-500 font-bold`
              : `${className ?? ""} text-gray-700 hover:text-green-500`
          }
          onClick={onClick}
        >
          {label}
        </NavLink>
      ))}
    </>
  );
};

export default NavLinksList;
