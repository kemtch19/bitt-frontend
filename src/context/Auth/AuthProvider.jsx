import { useAuth } from "../../hooks/useAuth";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const Auth = useAuth();

  return (<AuthContext.Provider value={Auth}>{children}</AuthContext.Provider>)
};