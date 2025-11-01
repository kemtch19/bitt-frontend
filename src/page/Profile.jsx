import {
  Calendar1Icon,
  CalendarIcon,
  MapIcon,
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
        <div className="bg-white rounded-2xl shadow overflow-hidden m-2">
          <div class="h-40 bg-linear-to-r from-cyan-500 to-violet-500" />
          <div className="p-3">
            <img
              className="size-40 object-cover rounded-full border-gray-300 border-2 absolute  top-25"
              src={girl}
            />
            <div className="pl-3 pt-20">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-semibold">Delfina Cumarta</h2>
                <Verified className="text-blue-400 mt-1" />
              </div>
              <p className="text-gray-500 text-sm -mt-1">@delfi12</p>
              <p className="text-sm mt-2 mb-5">
                creador | Exploradora | Apasionada por aprender | Lorem ipsum
                dolor sit amet Lorem, ipsum..
              </p>
              <div className="flex text-sm mt-2 text-gray-500 gap-2 items-center">
                <MapPinIcon className="size-4" />
                <p className="mr-5">Florida, EU</p>
                <CalendarIcon className="size-4" />
                <p>Se unió hace 15 días</p>
              </div>
              <hr className="text-gray-300 my-3" />
              <div className="flex gap-1 items-center">
                <b>6</b>
                <p className="text-xs mt-1 mr-3 text-gray-500">Posts</p>
                <b>2</b>
                <p className="text-xs mt-1 mr-3 text-gray-500">Followers</p>
                <b>3</b>
                <p className="text-xs mt-1 mr-3 text-gray-500">Following</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
