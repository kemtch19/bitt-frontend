import { ImageIcon, ImagePlusIcon } from "lucide-react";
import { useState } from "react";

export const Settings = () => {
  const [image, setImage] = useState(null);

  return (
    <div className="w-screen h-screen">
      <div className="bg-base-100 m-2 p-2 rounded-2xl ">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-sm text-gray-500">
          Configura tu espacio a tu modo Bitter :3
        </p>
        <div className="mt-4 dark:border-gray-600 p-2">
          <div className="flex flex-col items-center">
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
          </div>
          <h2 className="font-bold text-[20px] mt-6 text-center">Información del Perfil</h2>
          <div className="gap-4 mt-2 ">
            <div className="flex flex-col flex-1">
              <label htmlFor="name" className="text-gray-400">
                Nombre
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="rounded p-1 border border-gray-300 focus:outline-gray-500 focus:outline-1"
              />
            </div>
            <div className="flex flex-col flex-1 mt-2">
              <label htmlFor="username" className="text-gray-400">
                Usuario
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="rounded p-1 border border-gray-300 focus:outline-gray-500 focus:outline-1"
              />
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="biographic" className="text-gray-400">
              Biografía
            </label>
            <textarea
              type="text"
              className="rounded p-1 border border-gray-300 focus:outline-gray-500 focus:outline-1"
            />
          </div>
          <div className="mt-4">
            <div className="flex flex-col flex-1">
              <label htmlFor="name" className="text-gray-400">
                Ubicación
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="rounded p-1 border border-gray-300 focus:outline-gray-500 focus:outline-1"
              />
            </div>
            <div className="flex flex-col flex-1 mt-2">
              <label htmlFor="username" className="text-gray-400">
                Sitio Web
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="rounded p-1 border border-gray-300 focus:outline-gray-500 focus:outline-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
