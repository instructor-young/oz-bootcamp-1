import { createContext, useContext, useState } from "react";

// 1. 만든다
export const AuthContext = createContext({
  isLoggedIn: false,
  logIn: () => {},
});

// 2. 사용한다
export const useAuth = () => useContext(AuthContext);

// 3. 범위를 정해서 값을 내려준다
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logIn = () => setIsLoggedIn(!isLoggedIn);

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn }}>
      {children}
    </AuthContext.Provider>
  );
}
