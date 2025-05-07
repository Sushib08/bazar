import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const ConnexionButton = () => {
  return (
    <button className="text-gray-700">
      <FontAwesomeIcon icon={faUser} />
    </button>
  );
};

export default ConnexionButton;
