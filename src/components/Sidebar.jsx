import {
  BellIcon,
  HomeIcon,
  MessageCircleIcon,
  Smile,
  UserRoundPenIcon,
} from "lucide-react";
import logo1 from "../assets/logo-bitt.svg";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const rutas = [
    { to: "/", label: "Inicio", icon: HomeIcon },
    { to: "/saludo", label: "Saludame", icon: Smile },
    { to: "/messages", label: "Mensaje", icon: MessageCircleIcon },
    { to: "/notifications", label: "Notificaciones", icon: BellIcon },
    { to: "/profile", label: "Perfil", icon: UserRoundPenIcon },
  ];

  return (
    <div className="flex flex-col p-3">
      <img className="" src={logo1}  />
      {rutas.map((r) => (
        <NavLink
          className={({ isActive }) =>
            `flex px-2 gap-2 ${
              isActive
                ? "bg-[#2343CC] text-white m-2 p-2 rounded-sm"
                : "hover:bg-[#bfc1ca5d] m-2 p-2 rounded-sm"
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
