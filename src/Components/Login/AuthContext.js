// AuthContext.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const login = () => {
    // Đặt trạng thái đăng nhập thành true, bạn có thể thay thế bằng logic xác thực thực tế.
    setLoggedIn(true);
  };

  const logout = () => {
    // Đặt trạng thái đăng nhập thành false khi người dùng đăng xuất.
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
