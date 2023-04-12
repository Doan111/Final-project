import ProfileCard from "./ProfileCard";
import { CurrentUserContext } from "./CurrentUserContext";
import ActivityCard from "./ActivityCard";
import { useContext, useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
const Profile = () => {
  const [updateDelete, setUpDateDelete] = useState(false);
  useEffect(() => {}, [updateDelete]);
  const { user, activities, specificActivities } =
    useContext(CurrentUserContext);
  const location = useLocation();
  const isAuthenticated = location?.state?.isAuthenticated;
  return (
    <>
      <ProfileCard />
      {specificActivities &&
        specificActivities.map((activity) => {
          return (
            <ActivityCard key={activity._id} activity={activity}>
              {" "}
            </ActivityCard>
          );
        })}
    </>
  );
};

export default Profile;
