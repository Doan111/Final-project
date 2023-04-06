import styled from "styled-components";
import ProfileCard from "./ProfileCard";
import { CurrentUserContext } from "./CurrentUserContext";
import ActivityCard from "./ActivityCard";
import { useContext } from "react";
const Profile = () => {
  const { activities, specificActivities } = useContext(CurrentUserContext);
  return (
    <>
      <ProfileCard />
      {specificActivities &&
        specificActivities.map((activity) => {
          return <ActivityCard activity={activity}> </ActivityCard>;
        })}
    </>
  );
};

export default Profile;
