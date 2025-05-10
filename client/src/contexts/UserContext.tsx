import React, { createContext, useContext, useEffect, useState } from "react";

interface User {
  firstName: string;
  token: string;
}

interface UserContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const firstName = localStorage.getItem("userFirstName");
    const token = localStorage.getItem("authToken");

    if (firstName && token) {
      setUser({ firstName, token });
    }

    const handleBeforeUnload = () => {
      logout();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const login = (userData: User) => {
    localStorage.setItem("userFirstName", userData.firstName);
    localStorage.setItem("authToken", userData.token);
    setUser(userData);
  };

  const logout = () => {
    const token = localStorage.getItem("authToken");

    if (token) {
      fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).catch((err) => console.error("Erreur lors du logout serveur", err));
    }

    localStorage.removeItem("userFirstName");
    localStorage.removeItem("authToken");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
