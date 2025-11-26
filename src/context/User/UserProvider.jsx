import { useUser } from "../../hooks/useUser";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  // const userState = useUser("6918c5e5ea4d721abd0d84e4");

  // console.log(`userState: ${userState.user}`);

  return (
    <UserContext.Provider value={userState}>{children}</UserContext.Provider>
  );
};
