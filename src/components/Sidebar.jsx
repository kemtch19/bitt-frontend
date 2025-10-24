import {
  BellIcon,
  HomeIcon,
  MessageCircleIcon,
  Smile,
  UserRoundPenIcon,
} from "lucide-react";
import logo1 from "../assets/logo1.png";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const rutas = [
    { to: "/", label: "Inicio", icon: HomeIcon },
    { to: "/saludo", label: "saludame", icon: Smile },
    { to: "/messages", label: "mensaje", icon: MessageCircleIcon },
    { to: "/notifications", label: "notificaciones", icon: BellIcon },
    { to: "/profile", label: "perfil", icon: UserRoundPenIcon },
  ];

  return (
    <div className="flex flex-col p-3">
      <img className="size-20 " src={logo1} alt="" />
      <h1>Sidebar</h1>
      {rutas.map((r) => (
        <NavLink
          className={({ isActive }) =>
            `flex ${
              isActive
                ? "bg-blue-400 m-2 p-2 rounded-sm"
                : "hover:bg-gray-600 m-2 p-2 rounded-sm"
            } `
          }
          key={r.label}
          to={r.to}
        >
          <r.icon />
          {r.label}
        </NavLink>
      ))}
    </div>
  );
};
