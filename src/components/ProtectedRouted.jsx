import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRouted = ({ user }) => {
  if (!user) {
    // replace hace que no se pueda devolver atrás en el historial si estamos en feed y avanzamos a login no nos deja devolvernos, es decir, reemplaza la ruta actual en el historial
    return <Navigate to="login" replace />;
  }
  return <Outlet />;
};
