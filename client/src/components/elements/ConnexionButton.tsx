import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";

const ConnexionButton = () => {
  const navigate = useNavigate();
  const { user, logout } = useUser();
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    if (user) {
      setShowMenu((prev) => !prev);
    } else {
      navigate("/connexion");
    }
  };

  return (
    <div className="relative">
      <button
        className="text-gray-700 hover:text-green-600 font-semibold"
        onClick={handleClick}
      >
        {user ? user.firstName : <FontAwesomeIcon icon={faUser} />}
      </button>

      {showMenu && user && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md z-10">
          <button
            onClick={() => {
              navigate("/profil");
              setShowMenu(false);
            }}
            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
          >
            Voir profil
          </button>
          <button
            onClick={() => {
              logout();
              setShowMenu(false);
              navigate("/");
            }}
            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
          >
            Se déconnecter
          </button>
        </div>
      )}
    </div>
  );
};

export default ConnexionButton;
