import { Navigate, Route, Routes } from "react-router-dom";
import { Feed } from "./page/Feed";
import { Layout } from "./page/Layout";
import { Login } from "./page/Login";
import { Notification } from "./page/Notification";
import { Profile } from "./page/Profile";
import { Message } from "./page/Message";
import { Settings } from "./page/Settings";
import { ChatBox } from "./page/ChatBox";
import { Register } from "./page/Register";
import { ProtectedRouted } from "./components/ProtectedRouted.jsx";
import { useAuthContext } from "./context/Auth/AuthContext.jsx";

export const App = () => {
  const {user, loading} = useAuthContext()

  if(loading) return <p>Cargando...</p>

  return (
    <Routes>
      {/* rutas públicas para todos */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* redirección desde / */}
      <Route
        path="/"
        element={user ? <Navigate to="/feed" /> : <Navigate to="/login" />}
      />

      {/* rutas privadas después de que se registren o loguen */}
      <Route element={<ProtectedRouted />}>
        <Route element={<Layout />}>
          <Route path="/feed" element={<Feed />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/messages" element={<Message />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/messages/:userId" element={<ChatBox />} />
        </Route>
      </Route>
    </Routes>
  );
};
