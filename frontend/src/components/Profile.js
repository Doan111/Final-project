import styled from "styled-components";
import ProfileCard from "./ProfileCard";
import { CurrentUserContext } from "./CurrentUserContext";
import ActivityCard from "./ActivityCard";
import { useContext } from "react";
const Profile = () => {
  const { activities } = useContext(CurrentUserContext);
  return (
    <>
      <ProfileCard />
      {activities.map((activity) => {
        return <ActivityCard activity={activity}> </ActivityCard>;
      })}
    </>
  );
};

export default Profile;
