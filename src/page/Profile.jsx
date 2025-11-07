import {
  CalendarIcon,
  MapPinIcon,
  Verified,
} from "lucide-react";
import girl from "../assets/fakePeople/girl.jpg";

export const Profile = () => {
  // 🧠 Logic

  return (
    <div className="relative h-full overflow-y-scroll text-black">
      {/* max-w-3xl -> nos da un tamaño fijo de 768px, pero tiene que estar combinado con mx-auto */}
      <div className="mx-auto max-w-3xl">
        <div className="bg-base-100 rounded-2xl shadow overflow-hidden m-2">
          <div class="h-40 bg-linear-to-r from-cyan-500 to-violet-500" />
          <div className="p-3">
            <img
              className="size-40 object-cover rounded-full border-gray-300 border-2 absolute  top-25"
              src={girl}
            />
            <div className="pl-3 pt-20">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-semibold dark:text-white">Delfina Cumarta</h2>
                <Verified className="text-blue-400 mt-1" />
              </div>
              <p className="text-gray-500 text-sm -mt-1">@delfi12</p>
              <p className="text-sm mt-2 mb-5 dark:text-white">
                Creadora | Exploradora | Apasionada por aprender | Lorem ipsum
                dolor sit amet Lorem, ipsum..
              </p>
              <div className="flex text-sm mt-2 text-gray-500 gap-2 items-center border-b-2 border-b-white/70 mb-3 pb-3">
                <MapPinIcon className="size-4" />
                <p className="mr-5 text-xs">Florida, EU</p>
                <CalendarIcon className="size-4" />
                <p className=" text-xs">Se unió hace 15 días</p>
              </div>
              <div className="flex gap-1 items-center">
                <b className="dark:text-gray-500">6</b>
                <p className="text-xs mt-1 mr-3 text-gray-500">Posts</p>
                <b className="dark:text-gray-500">2</b>
                <p className="text-xs mt-1 mr-3 text-gray-500">Followers</p>
                <b className="dark:text-gray-500">3</b>
                <p className="text-xs mt-1 mr-3 text-gray-500">Following</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
