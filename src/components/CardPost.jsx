import { HeartIcon,  MessageSquareIcon, RepeatIcon } from "lucide-react";

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
      {data.map((d) => (
        <div className="p-3 flex gap-3 border-t py-5 border-gray-500 bg-white">
          <img className="size-14 rounded-full object-fit" src={d.image} alt="" />
          <div>
            <div className="flex gap-2 mb-1">
              <h2 className="text-black">{d.name}</h2>
              <span className="text-black">@{d.username} · {d.time}h ago</span>
            </div>
            <p className="text-black mb-4">{d.description}</p>
            <div className="flex gap-8">
              <div className="flex gap-2">
                <HeartIcon color="black" width={20} /><span className="text-black">{d.likes}</span>
              </div>
              <div className="flex gap-2">
                <RepeatIcon color="black" width={20} /><span className="text-black">{d.reposts}</span>
              </div>
              <div className="flex gap-2">
                <MessageSquareIcon color="black" width={20} /><span className="text-black">{d.chats}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
