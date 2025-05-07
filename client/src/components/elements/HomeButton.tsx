import React from "react";
import { Link } from "react-router-dom";

interface HomeButtonProps {
  textColor?: string;
  textSize?: string;
}

const HomeButton: React.FC<HomeButtonProps> = ({
  textColor = "text-green-500",
}) => {
  return (
    <Link
      to="/"
      className={`font-quicksand font-bold text-[2rem] ${textColor}`}
    >
      Bazar
    </Link>
  );
};

export default HomeButton;
