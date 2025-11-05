import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading";
import { SendHorizonal } from "lucide-react";

export const ChatBox = () => {
  const { userId } = useParams();

  return userId === "12345" ? (
    <div className="h-screen w-dvw overflow-y-hidden bg-white">
      <div className="flex gap-2 px-2 py-1 bg-gray-200 shadow rounded-t-2xl fixed top-0 w-full z-19 rounded-b-xl items-center">
        <img
          className="rounded-full size-10 object-cover"
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
        />
        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-[20px]">Hombre Araña</h1>
          <p className="text-xs text-gray-600">@telaraña1234</p>
        </div>
      </div>
      {/* componente de daisy chat with image */}
      <div className="h-full overflow-y-scroll scrollbar-none w-full px-2 py-15">
        <div className="chat chat-start">
          <div className="chat-image avatar ">
            <div className="w-10 rounded-full ">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
              />
            </div>
          </div>
          <div className="chat-header">
            Obi-Wan Kenobi
            <time className="text-xs opacity-50">12:45</time>
          </div>
          <div className="chat-bubble shadow bg-gray-200">
            You were the Chosen One!
          </div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
              />
            </div>
          </div>
          <div className="chat-header">
            Anakin
            <time className="text-xs opacity-50">12:46</time>
          </div>
          <div className="chat-bubble shadow bg-gray-200">I hate you!</div>
          <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
              />
            </div>
          </div>
          <div className="chat-header">
            Anakin
            <time className="text-xs opacity-50">12:46</time>
          </div>
          <div className="chat-bubble shadow bg-gray-200">I hate you!</div>
          <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
              />
            </div>
          </div>
          <div className="chat-header">
            Anakin
            <time className="text-xs opacity-50">12:46</time>
          </div>
          <div className="chat-bubble shadow bg-gray-200">I hate you!</div>
          <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
              />
            </div>
          </div>
          <div className="chat-header">
            Anakin
            <time className="text-xs opacity-50">12:46</time>
          </div>
          <div className="chat-bubble shadow bg-gray-200">I hate you!</div>
          <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
              />
            </div>
          </div>
          <div className="chat-header">
            Anakin
            <time className="text-xs opacity-50">12:46</time>
          </div>
          <div className="chat-bubble shadow bg-gray-200">I hate you!</div>
          <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
              />
            </div>
          </div>
          <div className="chat-header">
            Anakin
            <time className="text-xs opacity-50">12:46</time>
          </div>
          <div className="chat-bubble shadow bg-gray-200">I hate you!</div>
          <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
              />
            </div>
          </div>
          <div className="chat-header">
            Anakin
            <time className="text-xs opacity-50">12:46</time>
          </div>
          <div className="chat-bubble shadow bg-gray-200">I hate you!</div>
          <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div>
        {/* input messages */}
        <div className="bg-white flex items-center border border-gray-200 fixed bottom-0 left-0 right-0 p-1 m-2 rounded-3xl">
          <input
            type="text"
            className="flex z-19 bottom-0 pl-2 w-full bg-white focus:outline-none "
            placeholder="Bittea algo"
          />
          <button className="rounded-full bg-linear-to-l from-blue-400 to-purple-400 p-1 cursor-pointer">
            <SendHorizonal />
          </button>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};
