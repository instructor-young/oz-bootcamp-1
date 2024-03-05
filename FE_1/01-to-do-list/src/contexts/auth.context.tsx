/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

type AuthContextValue = {
  isLoggedIn: boolean;
  logIn: () => void;
};

const initialValue: AuthContextValue = {
  isLoggedIn: false,
  logIn: () => {},
};

const AuthContext = createContext(initialValue);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = () => setIsLoggedIn(true);
  const value: AuthContextValue = { isLoggedIn, logIn };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
