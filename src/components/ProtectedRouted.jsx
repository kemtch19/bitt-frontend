import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/Auth/AuthContext";
import { Loading } from "./Loading";

export const ProtectedRouted = () => {
  const { user, loading } = useAuthContext();

  if (loading) return <Loading></Loading>;
  if (!user) return <Navigate to="/login" />;

  return <Outlet />;
};
