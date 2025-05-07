import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface BarsProps {
  toggleSidebar: () => void;
}

const Bars: React.FC<BarsProps> = ({ toggleSidebar }) => {
  return (
    <button onClick={toggleSidebar}>
      <FontAwesomeIcon icon={faBars} className="text-green-500" />
    </button>
  );
};

export default Bars;
