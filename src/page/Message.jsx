import { MessageCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";

export const Message = () => {

  return (
    <div className="flex flex-col bg-white rounded-2xl m-3 p-3  h-full overflow-y-hidden no-scrollbar ">
      <h1 className="text-3xl font-bold">Message</h1>
      <p className="text-sm text-gray-500">
        Habla con tus amigos y familiares enviando un bit.
      </p>
      <Link
        to={"/messages/12345"}
        className="hero shadow-2xl rounded-md mt-2 bg-white hover:bg-gray-100 "
      >
        <div className="hero-content flex items-center gap-2 lg:flex-row-reverse">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="size-15 rounded-full shadow-2xl object-cover"
          />
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Hombre Araña</h1>
            <p className="text-sm text-gray-500 -mt-1">@telaraña1234</p>
            <p className="line-clamp-1 text-sm text-ellipsis overflow-hidden break-word mt-2">
              Mi nombre es peter parker y me gusta subir muro y expulsar
              telarañas por las manos aunque es algo que no controlo porque
              realmente se ve raro, pero puedo salvar a las personas con esto.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
