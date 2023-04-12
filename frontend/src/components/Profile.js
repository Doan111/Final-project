import ProfileCard from "./ProfileCard";
import { CurrentUserContext } from "./CurrentUserContext";
import ActivityCard from "./ActivityCard";
import { useContext, useEffect, useState } from "react";

const Profile = () => {
  const [updateDelete, setUpDateDelete] = useState(false);
  useEffect(() => {}, [updateDelete]);
  const { specificActivities } = useContext(CurrentUserContext);

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
