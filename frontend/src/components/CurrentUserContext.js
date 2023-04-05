import { useState, useEffect, createContext } from "react";

export const CurrentUserContext = createContext(null);
import { useAuth0 } from "@auth0/auth0-react";

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const { user, isAuthenticated } = useAuth0();
  const [activities, setActivities] = useState({});

  isAuthenticated ? setCurrentUser(user) : null;

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

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        isAuthenticated,
        activities,
        setActivities,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
