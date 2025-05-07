import React from "react";
import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <Link
      to="/"
      className="font-quicksand font-bold text-green-500 text-[2rem]"
    >
      Bazar
    </Link>
  );
};

export default HomeButton;
