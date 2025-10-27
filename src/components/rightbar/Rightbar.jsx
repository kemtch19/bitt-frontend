import { DirectMessages } from "./DirectMessages";
import { SuggestedPeople } from "./SuggestedPeople";
import { Trends } from "./Trends";

export const Rightbar = () => {
  // 🧠 Logic

  return (
    <>
      <div className="flex-col text-black"> 
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
