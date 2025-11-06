import {
  HeartIcon,
  MessageSquareIcon,
  RepeatIcon,
  Verified,
  VerifiedIcon,
} from "lucide-react";
import { convertNumber } from "../utils/convertNumbers.js";
import girl from "../assets/fakePeople/girl.jpg";

export const CardPost = () => {
  const data = [
    {
      name: "Laura",
      username: "lauradev",
      time: 2,
      image: "https://dummyimage.com/600x400/a827a8/0e1ab8.png&text=Image",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque alias labore numquam dicta rem adipisci hic cupiditate, repellat deleniti laboriosam, voluptatem vel. Eaque quam tempora pariatur distinctio porro dignissimos ipsum.",
      likes: 1200,
      reposts: 45,
      chats: 112,
    },
    {
      name: "Mary",
      username: "mrowatt0",
      time: 6,
      image: "https://dummyimage.com/600x400/a827a8/0e1ab8.png&text=Image",
      description:
        "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      likes: 1432,
      reposts: 41,
      chats: 162,
    },
    {
      name: "Filmore",
      username: "fmcaw1",
      time: 2,
      image: "https://dummyimage.com/600x400/a827a8/0e1ab8.png&text=Image",
      description:
        "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      likes: 179,
      reposts: 71,
      chats: 187,
    },
    {
      name: "Roseann",
      username: "rnerger2",
      time: 0,
      image: "https://dummyimage.com/600x400/a827a8/0e1ab8.png&text=Image",
      description: "Fusce consequat. Nulla nisl. Nunc nisl.",
      likes: 1870,
      reposts: 45,
      chats: 170,
    },
    {
      name: "Kali",
      username: "kcowie3",
      time: 9,
      image: "https://dummyimage.com/600x400/a827a8/0e1ab8.png&text=Image",
      description:
        "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      likes: 896,
      reposts: 72,
      chats: 117,
    },
  ];

  return (
    <>
      {data.map((d, index) => (
        <div
          key={index}
          className="w-full flex gap-3 p-2 mt-2 border-b-[0.5px] border-gray-500"
        >
          <div className="flex-1">
            <img className="size-20 rounded-full object-cover" src={girl} />
          </div>
          <div className="flex-6">
            <div className="flex gap-2 mb-1">
              <h2 className="font-bold">{d.name}</h2>
              <VerifiedIcon className="text-blue-400 -ml-1.5 mt-0.5 size-5" />
              <span className="text-gray-500 text-sm flex items-center">
                @{d.username} · {d.time}h ago
              </span>
            </div>
            <p className="text-black dark:text-white mb-1">{d.description}</p>
            <div className="flex gap-8">
              <div className="flex gap-1 items-center">
                <HeartIcon className="dark:text-white text-black" width={13} />
                <span className="text-black dark:text-white text-sm">
                  {convertNumber(d.likes)}
                </span>
              </div>
              <div className="flex gap-1 items-center">
                <RepeatIcon className="dark:text-white text-black" width={13} />
                <span className="text-black dark:text-white text-sm">
                  {convertNumber(d.reposts)}
                </span>
              </div>
              <div className="flex gap-1 items-center">
                <MessageSquareIcon
                  className="dark:text-white text-black"
                  width={13}
                />
                <span className="text-black dark:text-white text-sm">
                  {convertNumber(d.chats)}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
