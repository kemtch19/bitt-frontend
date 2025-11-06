import { ImageIcon, ImagePlusIcon } from "lucide-react";
import { useState } from "react";

export const Settings = () => {
  const [image, setImage] = useState(null);

  return (
    <div className="w-screen h-screen">
      <div className="bg-white m-2 p-2 rounded-2xl">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-sm text-gray-500">
          Configura tu espacio a tu modo Bitter :3
        </p>
        <div className="mt-4 border border-gray-200 p-2">
          <h2 className="font-bold text-[20px]">Foto de Perfil</h2>
          <div className="flex gap-3 mt-2">
            <label htmlFor="image">
              {image ? (
                <div className="relative group w-fit mx-auto">
                  <img
                    src={URL.createObjectURL(image)}
                    className="size-20 rounded-full shadow-2xl object-cover"
                  />

                  <div className="inset-0 absolute flex justify-center items-center bg-black/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <ImagePlusIcon className="size-6 text-white/70" />
                  </div>
                </div>
              ) : (
                <ImageIcon className="size-6 text-gray-400 cursor-pointer" />
              )}

              <input
                type="file"
                id="image"
                name="profile"
                accept="profile/*"
                hidden
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>
          </div>
          <h2 className="font-bold text-[20px] mt-4">Información del Perfil</h2>
          
        </div>
      </div>
    </div>
  );
};
