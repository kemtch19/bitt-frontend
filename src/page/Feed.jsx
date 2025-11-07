import { ClipboardListIcon, ImagePlusIcon, SmilePlusIcon } from "lucide-react";
import { CardPost } from "../components/CardPost";
import girl from "../assets/fakePeople/girl.jpg";

export const Feed = () => {
  return (
    <div className="p-2 flexw-screen h-screen">
      <div className="flex bg-base-100 rounded-2xl flex-col">
        <div className="flex p-3 justify-center">
          <div className="border-2 border-gray-100 dark:border-gray-600 rounded-2xl p-2">
            <div className="flex items-center ">
              <img className="w-10! h-10 object-cover rounded-full" src={girl} />
              <div>
                <textarea
                  className="input input-ghost h-7 rezize-none overflow-hidden bg-base-100 text-black focus:outline-none placeholder:text-[14px] dark:text-white placeholder:text-white"
                  type="text"
                  placeholder="Qué está pasando?"
                  maxLength={100}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex mt-3 gap-2">
                <button className="cursor-pointer">
                  <ImagePlusIcon className="text-blue-500 size-5" />
                </button>
                <button className="cursor-pointer">
                  <ClipboardListIcon className="text-blue-500 size-5" />
                </button>
                <button className="cursor-pointer">
                  <SmilePlusIcon className="text-blue-500 size-5" />
                </button>
              </div>
              <button
                className="bg-blue-500 text-white mt-2 rounded-lg p-1 pr-3 pl-3 cursor-pointer"
                type="submit"
              >
                Bittear
              </button>
            </div>
          </div>
        </div>
        <CardPost />
      </div>
    </div>
  );
};
