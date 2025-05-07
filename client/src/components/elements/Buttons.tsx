import React from "react";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  label: string;
  className?: string;
  to?: string;
}

const Buttons: React.FC<ButtonProps> = ({ label, className, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) navigate(to);
  };

  return (
    <button
      onClick={handleClick}
      className={`border py-3 px-6 rounded-lg text-xl ${className}`}
    >
      {label}
    </button>
  );
};

export default Buttons;
