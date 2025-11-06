import girl from "../assets/fakePeople/girl.jpg";

export const Notification = () => {
  // 🧠 Logic

  return (
    <div className="w-screen h-screen">
      <div className="bg-white m-2 p-2 rounded-2xl">
        <h1 className="text-3xl font-bold ">Notificaciones</h1>
        <p className="text-sm text-gray-500">
          Estas son tus ultimas notificaciones bitter.
        </p>

        {/* botones */}
        <div className="my-4 flex gap-2">
          <button className="cursor-pointer focus:bg-blue-500 focus:text-white bg-gray-200 rounded-sm px-2">
            Todos
          </button>
          <button className="cursor-pointer focus:bg-blue-500 focus:text-white bg-gray-200 rounded-sm px-2">
            Menciones
          </button>
          <button className="cursor-pointer focus:bg-blue-500 focus:text-white bg-gray-200 rounded-sm px-2">
            Likes
          </button>
          <button className="cursor-pointer focus:bg-blue-500 focus:text-white bg-gray-200 rounded-sm px-2">
            Comentarios
          </button>
        </div>

        {/* cards */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 shadow-[0_0_10px_rgba(0,0,0,0.25)] rounded-2xl p-2">
            <img src={girl} className="rounded-full size-14 object-cover" />
            <div className="text-sm">
              <p>
                <span className="font-bold">@Laura</span> te ha mencionado en un
                bitt
              </p>
              <p className="text-gray-400">
                "Hola como estas? nos juntamos para tomar un café?"
              </p>
            </div>
            <p className="text-sm text-gray-400 ml-auto">hace 5 m</p>
          </div>
          <div className="flex items-center gap-2 shadow-[0_0_10px_rgba(0,0,0,0.25)] rounded-2xl p-2">
            <img src={girl} className="rounded-full size-14 object-cover" />
            <div className="text-sm">
              <p>
                <span className="font-bold">@Laura</span> te ha mencionado en un
                bitt
              </p>
              <p className="text-gray-400">
                "Hola como estas? nos juntamos para tomar un café?"
              </p>
            </div>
            <p className="text-sm text-gray-400 ml-auto">hace 1 h</p>
          </div>
          <div className="flex items-center gap-2 shadow-[0_0_10px_rgba(0,0,0,0.25)] rounded-2xl p-2">
            <img src={girl} className="rounded-full size-14 object-cover" />
            <div className="text-sm">
              <p>
                <span className="font-bold">@Laura</span> te ha mencionado en un
                bitt
              </p>
              <p className="text-gray-400">
                "Hola como estas? nos juntamos para tomar un café?"
              </p>
            </div>
            <p className="text-sm text-gray-400 ml-auto">hace 5 m</p>
          </div>
          <div className="flex items-center gap-2 shadow-[0_0_10px_rgba(0,0,0,0.25)] rounded-2xl p-2">
            <img src={girl} className="rounded-full size-14 object-cover" />
            <div className="text-sm">
              <p>
                <span className="font-bold">@Laura</span> te ha mencionado en un
                bitt
              </p>
              <p className="text-gray-400">
                "Hola como estas? nos juntamos para tomar un café?"
              </p>
            </div>
            <p className="text-sm text-gray-400 ml-auto">hace 5 m</p>
          </div>
        </div>
      </div>
    </div>
  );
};
