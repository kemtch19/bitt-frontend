import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading";

export const ChatBox = () => {
  const { userId } = useParams();

  return userId === "12345" ? (
    <div className="h-screen w-screen bg-yellow-200 mx-4 ">
      <div className="flex gap-2 px-2 py-1 bg-gray-200 shadow rounded-t-2xl fixed top-0 w-full z-20 rounded-b-xl ">
        <img
          className="rounded-full size-14 object-cover"
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
        />
        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-[20px]">Hombre Araña</h1>
          <p className="text-xs text-gray-600">@telaraña1234</p>
        </div>
      </div>
      {/* componente de daisy chat with image */}
      <div className="m-2 p-2">
        <div className="chat chat-start mt-12">
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
          <div className="chat-bubble shadow bg-gray-200">You were the Chosen One!</div>
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
      </div>
    </div>
  ) : (
    <Loading />
  );
};
