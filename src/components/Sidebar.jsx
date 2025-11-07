import {
  BellIcon,
  HomeIcon,
  MessageCircleIcon,
  SettingsIcon,
  UserRoundPenIcon,
} from "lucide-react";
import logo1 from "../assets/logo-bitt.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { DarkTheme } from "./DarkTheme";

export const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();
  const rutas = [
    { to: "/", label: "Inicio", icon: HomeIcon },
    { to: "/messages", label: "Mensajes", icon: MessageCircleIcon },
    { to: "/notifications", label: "Notificaciones", icon: BellIcon },
    { to: "/profile", label: "Perfil", icon: UserRoundPenIcon },
  ];

  return (
    <div
      className={`w-45 border-r border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-0 bottom-0 z-20 bg-base-100 ${
        sidebarOpen ? "translate-x-0" : "max-sm:-translate-x-full"
      } transition-all duration-500 ease-in-out`}
    >
      <div className="w-full">
        <img
          src={logo1}
          onClick={() => {
            navigate("/");
            setSidebarOpen(false);
          }}
          className="mx-auto border-b-2 border-gray-200 cursor-pointer mb-6 p-2"
        />
        {rutas.map((r) => (
          <NavLink
            key={r.label}
            to={r.to}
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              `flex px-2 gap-2 ${
                isActive
                  ? "bg-[#3152e6] text-white m-2 p-2 rounded-sm"
                  : "hover:bg-[#bfc1ca5d] m-2 p-2 rounded-sm"
              } `
            }
          >
            <r.icon />
            {r.label}
          </NavLink>
        ))}
      </div>
      <DarkTheme />
      <div className="flex justify-between items-center w-full border-t-2 p-2 border-gray-200">
        <div className="flex gap-2 items-center">
          <img
            className="rounded-full size-10 object-center"
            src={"https://dummyimage.com/600x400/a827a8/0e1ab8.png&text=Image"}
          />
          <div className="flex flex-col">
            <h3 className="font-bold text-[15px] dark:text-amber-300">John Doe</h3>
            <p className="text-xs text-gray-500 -mt-1">@johndoe</p>
          </div>
        </div>
        <Link to={"/settings"} onClick={() => setSidebarOpen(false)}>
          <SettingsIcon className="size-5" />
        </Link>
      </div>
    </div>
  );
};
