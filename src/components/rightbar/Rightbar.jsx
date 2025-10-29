import { DirectMessages } from "./DirectMessages";
import { SuggestedPeople } from "./SuggestedPeople";
import { Trends } from "./Trends";

export const Rightbar = () => {
  // 🧠 Logic

  return (
    <>
      <div className="flex flex-col h-dvh content-between text-black mx-5"> 
        <div className="flex-1"> 
          <Trends />
        </div>
        <div className="flex-1">
          <SuggestedPeople />
        </div>
        <div className="flex-1">
          <DirectMessages />
        </div>
      </div>
    </>
  );
};
