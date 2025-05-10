import React, { createContext, useContext, useEffect, useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { fetchCart, clearCart } from "../redux/cartSlice";

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
  const dispatch = useAppDispatch();

  useEffect(() => {
    const firstName = localStorage.getItem("userFirstName");
    const token = localStorage.getItem("authToken");

    if (firstName && token) {
      const userData = { firstName, token };
      setUser(userData);
      dispatch(fetchCart());
    }

    const handleBeforeUnload = () => {
      logout();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [dispatch]);

  const login = (userData: User) => {
    localStorage.setItem("userFirstName", userData.firstName);
    localStorage.setItem("authToken", userData.token);
    setUser(userData);
    dispatch(fetchCart());
  };

  const logout = () => {
    const token = localStorage.getItem("authToken");
    if (token) {
      fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      }).catch((err) => console.error("Erreur lors du logout serveur", err));
    }
    localStorage.removeItem("userFirstName");
    localStorage.removeItem("authToken");
    setUser(null);
    dispatch(clearCart());
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
