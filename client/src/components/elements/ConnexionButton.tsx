import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const ConnexionButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/connexion");
  };

  return (
    <button
      className="text-gray-700 hover:text-green-600"
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faUser} />
    </button>
  );
};

export default ConnexionButton;
