import { useEffect, useState } from "react";
import { getUserById } from "../services/user";

export const useUser = (id) => {
  const [userProfile, setUserProfile] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUserById(id);
        setUserProfile(data);
      } catch (error) {
        console.error("Error: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  return { userProfile, loading, setUserProfile };
};
