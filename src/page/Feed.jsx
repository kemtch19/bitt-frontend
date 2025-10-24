import { ClipboardIcon, ClipboardListIcon, ImageIcon, ImagePlus, ImagePlusIcon, SmileIcon, SmilePlusIcon } from "lucide-react";

export const Feed = () => {
  // 🧠 Logic

  return (
    <div className="bg-[#efeff0] h-screen p-3">
      <h1>Inicio</h1>
      <div className="p-3 flex gap-2 bg-white">
        <img src="/vite.svg" alt="" />
        <div>
          <div className="flex">
            <input
              className="border"
              type="text"
              placeholder="¿Qué está pasando?"
            />
          </div>
          <div className="flex justify-between">
            <div className="flex">
              <ImagePlusIcon color="#EB33BD" />
              <ClipboardListIcon />
              <SmilePlusIcon />
            </div>
            <button type="submit">Bitt</button>
          </div>
        </div>
      </div>
    </div>
  );
};
