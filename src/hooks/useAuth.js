import { useEffect, useState } from "react";
import { getMe, login, logout } from "../services/auth";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const data = await getMe();
        const profile = {
          username: data.user.username,
          name: data.user.name,
          avatar: data.user.avatar,
        };
        setUser(data.user);

        localStorage.setItem("userProfile", JSON.stringify(profile));
      } catch {
        setUser(null);
        localStorage.removeItem("userProfile");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const handleLogin = async (input, password) => {
    const data = await login(input, password);
    const profile = {
      username: data.user.username,
      name: data.user.name,
      avatar: data.user.avatar,
    };
    setUser(data.user);
    localStorage.setItem("userProfile", JSON.stringify(profile));
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
    localStorage.removeItem("userProfile");
  };

  return {
    user,
    loading,
    handleLogin,
    handleLogout,
  };
};
