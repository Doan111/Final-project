import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect, createContext } from "react";
import { useParams } from "react-router-dom";
export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const { user, isAuthenticated } = useAuth0();
  const [activities, setActivities] = useState();
  const [specificActivities, setSpecificActivities] = useState([]);
  const [deleted, setDeleted] = useState(false);
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
  useEffect(() => {
    if (isAuthenticated) {
      fetch(`/api/get-activities/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("here", data);
          setSpecificActivities(data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isAuthenticated, deleted]);

  return (
    <CurrentUserContext.Provider
      value={{
        user,

        isAuthenticated,
        activities,
        setActivities,
        setSpecificActivities,
        specificActivities,
        deleted,
        setDeleted,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
