import styled from "styled-components";
import Error from "./Error";
import { useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import { useEffect, useState } from "react";
import {
  FaRunning,
  FaSwimmer,
  FaBiking,
  FaRegThumbsUp,
  FaRegComment,
} from "react-icons/fa";

const ActivityCard = ({ activity }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [updateData, setUpdateData] = useState({
    _id: activity._id,
    date: activity.date,
    time: activity.time,
    unit: activity.unit,
    distance: activity.distance,
    title: activity.title,
    description: activity.description,
    sport: activity.sport,
  });
  const [like, setLikes] = useState(0);
  const [hasBeenLiked, setHasBeenLiked] = useState(false);
  const {
    user,
    isAuthenticated,
    deleted,
    setDeleted,
    isUpdated,
    setIsUpdated,
  } = useContext(CurrentUserContext);

  const handleDelete = (id) => {
    fetch(`/api/delete-activity/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 204) {
          // window alert dont appear and page dont automatically refresh

          window.alert("Deleted!");
        }
      });
  };

  const hanldeChange = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleClick = (event) => {
    if (hasBeenLiked === false) {
      event.stopPropagation();
      setLikes(like + 1);
      setHasBeenLiked(true);
    } else {
      event.stopPropagation();
      setLikes(like - 1);
      setHasBeenLiked(false);
    }
  };

  const handleEdit = (id) => {
    fetch(`/api/update-activity`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 200) {
          setIsUpdated(!isUpdated);
          window.alert("updated!");
        }
      });
  };
  return (
    <>
      {isAuthenticated ? (
        <Wrapper>
          <InfoContainer>
            <TopInformation>
              {!isOpen && (
                <>
                  <Image src={user.picture} alt={user.name} />
                  <Name> {user.nickname}</Name>
                </>
              )}
            </TopInformation>

            {activity.date && !isOpen && <Date>{activity.date}</Date>}
            {isOpen && (
              <input
                onChange={hanldeChange}
                name="date"
                value={updateData.date}
              />
            )}

            {activity.title && !isOpen && (
              <>
                <Title>{activity.title}</Title>
              </>
            )}
            {isOpen && (
              <input
                onChange={hanldeChange}
                name="title"
                value={updateData.title}
              />
            )}
            <DeleteButton
              onClick={() => {
                handleDelete(activity._id);
              }}
            >
              X
            </DeleteButton>

            <DeleteButton
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Edit
            </DeleteButton>
            <BottomInformation>
              {activity.distance && !isOpen && (
                <Distance>
                  <DistanceTitle>Distance</DistanceTitle>
                  <>
                    <DistanceNumber>
                      {activity.distance}
                      {activity.unit}
                    </DistanceNumber>
                  </>
                </Distance>
              )}
              {isOpen && (
                <>
                  <input
                    onChange={hanldeChange}
                    name="distance"
                    value={updateData.distance}
                  />
                  <select onChange={hanldeChange} name="unit">
                    <option value="kilometers">kilometers</option>
                    <option value="mile">Mile</option>
                    <option value="meters">Meters</option>
                  </select>
                </>
              )}
              {activity.time && !isOpen && (
                <Time>
                  <TimeTitle>Time</TimeTitle>
                  <>
                    <ActuelTime>{activity.time}</ActuelTime>
                  </>
                </Time>
              )}
              {isOpen && (
                <input
                  onChange={hanldeChange}
                  name="time"
                  value={updateData.time}
                />
              )}
            </BottomInformation>
            {activity.description && !isOpen && (
              <DescriptionWrapper>
                <DescriptionTitle>Activity description</DescriptionTitle>
                <>
                  {" "}
                  <ActuelDescription>{activity.description}</ActuelDescription>
                </>
              </DescriptionWrapper>
            )}
            {isOpen && (
              <input
                onChange={hanldeChange}
                name="description"
                value={updateData.description}
              />
            )}

            {isOpen && (
              <EditBottom>
                <select onChange={hanldeChange} name="sport">
                  <option value="run">Run</option>
                  <option value="swim">Swim</option>
                  <option value="bike">Bike</option>
                </select>
              </EditBottom>
            )}
            {isOpen && (
              <SaveButton onClick={handleEdit}>Save changes</SaveButton>
            )}
            {!isOpen && (
              <IconContainer>
                <Icon>
                  {" "}
                  {activity.sport === "bike" && (
                    <FaBiking style={{ fontSize: "34px" }} />
                  )}
                </Icon>
                <Icon>
                  {activity.sport === "swim" && (
                    <FaSwimmer style={{ fontSize: "34px" }} />
                  )}
                </Icon>
                <Icon>
                  {activity.sport === "run" && (
                    <FaRunning style={{ fontSize: "34px" }} />
                  )}
                </Icon>
              </IconContainer>
            )}
          </InfoContainer>
          {!isOpen && (
            <DivIconBottom>
              <LikeWrapper onClick={handleClick}>
                <LikeContainer hasBeenLiked={hasBeenLiked}>
                  <FaRegThumbsUp
                    style={{
                      fill: hasBeenLiked ? "grey" : null,
                      fontSize: "24px",
                    }}
                  />
                </LikeContainer>
                {like}
              </LikeWrapper>
              <CommentIcon>
                <FaRegComment style={{ fontSize: "24px" }} />
              </CommentIcon>
            </DivIconBottom>
          )}
        </Wrapper>
      ) : (
        <Error />
      )}
    </>
  );
};
const SaveButton = styled.button`
  position: relative;
  top: 150px;
`;
const EditBottom = styled.div`
  position: relative;
  /* top: 150px; */
  margin: 0;
`;
const CommentIcon = styled.div`
  display: flex;
  position: relative;
  bottom: 80px;
  left: 280px;
`;
const LikeWrapper = styled.div`
  display: flex;
  position: relative;
  bottom: 52px;
  left: 230px;
`;
const DivIconBottom = styled.div``;
const LikeContainer = styled.div``;
const Icon = styled.div`
  position: relative;
  right: 215px;
  bottom: 180px;
`;

const IconContainer = styled.div``;
const DescriptionTitle = styled.div`
  color: lightgray;
  right: 85px;
  position: relative;
`;
const DescriptionWrapper = styled.div`
  position: relative;
  top: -55px;
  right: 0px;
  border-bottom: 2px solid lightgrey;
`;
const ActuelDescription = styled.div`
  margin: 0px 0px 5px 5px;

  right: 85px;
  position: relative;
`;
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
  left: 262px;
  &:hover {
    filter: brightness(85%);
  }
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
  top: -640px;
`;

export default ActivityCard;
