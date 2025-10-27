export const SuggestedPeople = () => {
  const data = [
    {
      name: "Kali",
      username: "kcowie3",
      image: "https://dummyimage.com/600x400/a827a8/0e1ab8.png&text=Image",
    },
    {
      name: "Viviene",
      username: "vdailly0",
      image: "https://dummyimage.com/600x400/a827a8/0e1ab8.png&text=Image",
    },
    {
      name: "Tobye",
      username: "tbazoge1",
      image: "https://dummyimage.com/600x400/a827a8/0e1ab8.png&text=Image",
    },
    {
      name: "Shirley",
      username: "sdriutti2",
      image: "https://dummyimage.com/600x400/a827a8/0e1ab8.png&text=Image",
    },
  ];

  return (
    <>
      <h1>Personas Sugeridas</h1>
      {data.slice(0, 2).map((d) => (
        <div className="my-4 flex justify-between" key={d.name}>
          <div className="flex gap-2">
            <img
              className="size-10 rounded-full object-fit"
              src={d.image}
              alt=""
            />
            <div className="flex flex-col">
              <h3 className="text-md">{d.name}</h3>
              <p className="text-xs">@{d.username}</p>
            </div>
          </div>
          <div className="">
            <button className="bg-[#2343CC] text-white mt-2 rounded-lg p-1 pr-3 pl-3 cursor-pointer">
              Seguir
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
