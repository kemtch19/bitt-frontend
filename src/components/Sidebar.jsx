import { HomeIcon, Icon, Smile } from "lucide-react";
import logo1 from "../assets/logo1.png";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const rutas = [
    { to: "/", label: "Inicio", icon: HomeIcon },
    { to: "/saludo", label: "saludame", icon: Smile },
  ];

  return (
    <div className="flex flex-col p-3">
      <img className="size-20 " src={logo1} alt="" />
      <h1>Sidebar</h1>
      {rutas.map((r) => (
        <Link className="flex" key={r.label} to={r.to}>
          <r.icon />
          {r.label}
        </Link>
      ))}
    </div>
  );
};
