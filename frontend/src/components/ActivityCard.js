import styled from "styled-components";
import Error from "./Error";
import { useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
const ActivityCard = ({ activity }) => {
  //   const { user, isAuthenticated } = useAuth0();
  const [isOpen, setIsOpen] = useState();

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
  //   const handleUpdate = (id) => {
  //     fetch(`/api/delete-activity/${id}`, { method: "DELETE" })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.status == 204) {
  //           setDeleted(!deleted);
  //           window.alert("Deleted!");
  //         }
  //       });
  //   };
  return (
    <>
      {isAuthenticated ? (
        <Wrapper>
          <InfoContainer>
            {/* <Div>{activity.distance} </Div> */}

            <TopInformation>
              <Image src={user.picture} alt={user.name} />
              <Name> {user.nickname}</Name>
            </TopInformation>
            {activity.date && <Date>{activity.date}</Date>}
            {activity.title && <Title>{activity.title}</Title>}
            <DeleteButton
              onClick={() => {
                handleDelete(activity._id);
              }}
            >
              Delete
            </DeleteButton>

            <DeleteButton>Edit</DeleteButton>
            <BottomInformation>
              {activity.distance && (
                <Distance>
                  <DistanceTitle>Distance</DistanceTitle>
                  <DistanceNumber>
                    {activity.distance}
                    {activity.unit}
                  </DistanceNumber>
                </Distance>
              )}
              {activity.time && (
                <Time>
                  <TimeTitle>Time</TimeTitle>
                  <ActuelTime>{activity.time}</ActuelTime>
                </Time>
              )}
            </BottomInformation>
          </InfoContainer>
        </Wrapper>
      ) : (
        <Error />
      )}
    </>
  );
};
const ActuelTime = styled.div`
  position: relative;
  top: -15px;
`;
const TimeTitle = styled.p`
  color: lightgray;
`;
const Time = styled.div`
  margin-left: 20px;
`;
const DistanceTitle = styled.div`
  color: lightgray;
`;
const DistanceNumber = styled.div`
  margin-left: 25px;
`;
const Distance = styled.p``;
const Title = styled.div`
  font-weight: bold;
  font-size: 25px;
  position: relative;
  margin-left: -110px;
  top: -30px;
`;
const Date = styled.div`
  position: relative;
  margin-left: -215px;
  top: -40px;
`;

const DeleteButton = styled.button`
  position: relative;
  top: -141px;
  left: 252px;
`;

const TopInformation = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 10px;
`;

const BottomInformation = styled.div`
  display: flex;
  margin-left: 125px;
  position: relative;
  top: -55px;
`;

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
  border: solid 2px black;
  text-decoration: none;
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-left: 25px;
`;

const Image = styled.img`
  border-radius: 50%;
  height: 75px;
  margin-left: 50px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 200px;
  position: relative;
  top: -400px;
`;

export default ActivityCard;
