import styled from "styled-components";
import Error from "./Error";
import { useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import { useEffect, useState } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
const ActivityCard = ({ activity }) => {
  // const { user, isAuthenticated } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);
  const [activityId, setActivity]

  const { user, isAuthenticated, deleted, setDeleted } =
    useContext(CurrentUserContext);

  const handleDelete = (id) => {
    fetch(`/api/delete-activity/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 204) {
          setDeleted(!deleted);
          window.alert("Deleted!");
        }
      });
  };
  const handleUpdate = (id) => {
    fetch(`/api/delete-activity/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 204) {
          setDeleted(!deleted);
          window.alert("Deleted!");
        }
      });
  };
  return (
    <>
      {isAuthenticated ? (
        <Wrapper>
          <InfoContainer>
            <Div>{activity.distance} </Div>
            <p>Energy {activity.energy}</p>
            <Image src={user.picture} alt={user.name} />
            <Name> {user.nickname}</Name>
          </InfoContainer>
          <button
            onClick={() => {
              handleDelete(activity._id);
            }}
          >
            Delete
          </button>

          <button>Edit</button>
        </Wrapper>
      ) : (
        <Error />
      )}
    </>
  );
};
const Div = styled.div``;
const InfoContainer = styled.div`
  margin-top: 50px;
  border: solid 2px black;
  width: 600px;
  height: 300px;
  text-align: center;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  border: solid 2px lightgrey;
  text-decoration: none;
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Image = styled.img`
  border-radius: 50%;
`;
const Wrapper = styled.div``;

export default ActivityCard;
