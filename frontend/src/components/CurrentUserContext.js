import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect, createContext } from "react";

export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const { user, isAuthenticated } = useAuth0();
  const [activities, setActivities] = useState();
  // all activities in the data base could be used for a homepage
  useEffect(() => {
    fetch("/api/get-activities")
      .then((res) => res.json())
      .then((data) => {
        setActivities(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // all activities for a single user that will be used for a profile page

  return (
    <CurrentUserContext.Provider
      value={{
        user,

        isAuthenticated,
        activities,
        setActivities,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
