import {
  BellIcon,
  HomeIcon,
  MessageCircleIcon,
  SettingsIcon,
  Smile,
  UserRoundPenIcon,
} from "lucide-react";
import logo1 from "../assets/logo-bitt.svg";
import { Link, NavLink } from "react-router-dom";
import { DarkTheme } from "./DarkTheme";

export const Sidebar = () => {
  const rutas = [
    { to: "/", label: "Inicio", icon: HomeIcon },
    { to: "/messages", label: "Mensaje", icon: MessageCircleIcon },
    { to: "/notifications", label: "Notificaciones", icon: BellIcon },
    { to: "/profile", label: "Perfil", icon: UserRoundPenIcon },
  ];

  return (
    <div className="w-60 border-r border-gray-200 ">
      <div>
        <img src={logo1} />
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
      <DarkTheme />
      <div className=" flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img
            className="rounded-full size-15 object-center"
            src={"https://dummyimage.com/600x400/a827a8/0e1ab8.png&text=Image"}
          />
          <div className="flex flex-col">
            <h3 className="text-sm">John Doe</h3>
            <p className="text-xs">@johndoe</p>
          </div>
        </div> 
        <Link to={"/settings"}>
          <SettingsIcon />
        </Link>
      </div>
    </div>
  );
};
