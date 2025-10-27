export const DirectMessages = () => {
  const data = [
    {
      name: "Laura",
      Image: "https://dummyimage.com/600x400/000/fff",
      message:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam vel magnam molestiae sit fuga cum aliquam odit corrupti tempore illum veniam quidem beatae iste, dolor aspernatur quas quos dolorum inventore.",
    },
    {
      name: "John Doe",
      Image: "https://dummyimage.com/600x400/000/fff",
      message: "Ya te envíe el archivo",
    },
  ];

  return (
    <>
      <h1>Mensajes Directos</h1>
      {data.slice(0,2).map((d)=>(
        <div className="flex gap-3">
          <img className="size-10 rounded-full object-fill" src={d.Image} />
          <div className="flex flex-col">
            <h3>{d.name}</h3>
            <p className="w-xs text-ellipsis overflow-hidden whitespace-nowrap">{d.message}</p>
          </div>
        </div>
      ))}
    </>
  );
};
