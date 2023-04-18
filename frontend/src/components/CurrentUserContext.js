import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect, createContext } from "react";
export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const { user, isAuthenticated } = useAuth0();
  const [activities, setActivities] = useState();
  const [isUpdated, setIsUpdated] = useState(false);
  const [specificActivities, setSpecificActivities] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [users, setUsers] = useState([]);
  // all activities in the data base could be used for a homepage^

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.data);
      });
  }, []);
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
  useEffect(() => {
    if (isAuthenticated) {
      fetch("/api/users", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      fetch(`/api/get-activities/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setSpecificActivities(data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isAuthenticated, deleted, isUpdated]);

  return (
    <CurrentUserContext.Provider
      value={{
        user,
        users,
        isAuthenticated,
        activities,
        setActivities,
        setSpecificActivities,
        specificActivities,
        deleted,
        setDeleted,
        isUpdated,
        setIsUpdated,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
