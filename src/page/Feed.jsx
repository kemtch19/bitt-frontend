import { ClipboardListIcon, ImagePlusIcon, SmilePlusIcon } from "lucide-react";
import { useRef, useState } from "react";
import { CardPost } from "../components/CardPost";
import { Rightbar } from "../components/rightbar/Rightbar.jsx";

export const Feed = () => {
  const [value, setValue] = useState("");
  const textareaRef = useRef(null);

  const handleInput = (e) => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
    setValue(e.target.value);
  };

  return (
    <div className="bg-[#efeff0] h-screen flex">
      {/* <div className="flex-3">
        <h1 className="text-black text-3xl py-2">Inicio</h1>
        <div className="p-3 flex gap-3 bg-white">
          <img className="h-fit" src="/vite.svg" alt="" />
          <div>
            <textarea
              ref={textareaRef}
              value={value}
              className="input input-ghost w-full rezize-none overflow-hidden bg-white text-black"
              type="text"
              placeholder="¿Qué está pasando?"
              maxLength={100}
              onInput={handleInput}
            />
            <div className="flex justify-between">
              <div className="flex mt-3 gap-3">
                <ImagePlusIcon color="#2343CC" />
                <ClipboardListIcon color="#2343CC" />
                <SmilePlusIcon color="#2343CC" />
              </div>
              <button
                className="bg-[#2343CC] text-white mt-2 rounded-lg p-1 pr-3 pl-3 cursor-pointer"
                type="submit"
              >
                Bittear
              </button>
            </div>
          </div>
        </div>
        <CardPost />
      </div>
      <div className="flex-1">
        <Rightbar />
      </div> */}
    </div>
  );
};
