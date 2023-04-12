import styled from "styled-components";
import Error from "./Error";

import { useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import { useState } from "react";
import { FaRunning, FaSwimmer, FaBiking } from "react-icons/fa";
const ProfileCard = () => {
  const {
    user,
    isAuthenticated,
    specificActivities,
    activities,
    deleted,
    setDeleted,
  } = useContext(CurrentUserContext);

  const [goalNum, setGoaNum] = useState(0);
  const [showNotice, setShowNotice] = useState(false);
  const handleGoal = (event) => {
    setGoaNum(event.target.value);
  };

  const handleClick = () => {
    fetch(`/api/delete-all-activities`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setDeleted(!deleted);
          window.alert("All activities were deleted!");
        }
      });
    setShowNotice(false);
  };


  const bikeNum = specificActivities.filter((item) => {
    return item.sport === "bike";
  });

  const runNum = specificActivities.filter((item) => {
    return item.sport === "run";
  });

  const swimNum = specificActivities.filter((item) => {
    return item.sport === "swim";
  });
  let actLeft = goalNum - specificActivities.length;

  return (
    <>
      {isAuthenticated ? (
        <Wrapper>
          <InfoContainer>
            <Image src={user.picture} alt={user.name} />
            <Name> {user.nickname}</Name>
            <Div>
              <Goal>
                Current goal:
                <Bold>
                  <Input
                    type="number"
                    min="0"
                    placeholder="set a number of activities"
                    id="second"
                    onChange={handleGoal}
                  ></Input>{" "}
                  activities
                </Bold>{" "}
              </Goal>
              <Sucess>
                Activities left to hit your target goal:
                <Bold>
                  {actLeft < 0 || actLeft === 0 ? 0 : actLeft} activities
                </Bold>
                {actLeft === 0 && (
                  <GoalComplete>
                    Congratulation on reaching your goal! Please reset and set a
                    new goal. By resetting, all your current activities will be
                    deleted.
                  </GoalComplete>
                )}
              </Sucess>
            </Div>
            {!showNotice && (
              <SportDivider>
                <SubTitle>Activities per sport</SubTitle>
                <SportWrapper>
                  <Icon>
                    <FaRunning style={{ fontSize: "24px" }} />
                    {runNum.length}
                  </Icon>

                  <Icon>
                    <FaBiking style={{ fontSize: "24px" }} />
                    {bikeNum.length}
                  </Icon>

                  <Icon>
                    {" "}
                    <FaSwimmer style={{ fontSize: "24px" }} />
                    {swimNum.length}
                  </Icon>
                </SportWrapper>
              </SportDivider>
            )}
            {!showNotice && (
              <Reset onClick={() => setShowNotice(true)}>Reset goal</Reset>
            )}

            {showNotice && (
              <WrapperNotice>
                <GoalComplete>
                  {" "}
                  Are you sure you want to delete all your activities and reset
                  your current goal?
                </GoalComplete>
                <ButtonNotice onClick={handleClick}>Yes</ButtonNotice>
                <ButtonNotice onClick={() => setShowNotice(false)}>
                  No
                </ButtonNotice>
              </WrapperNotice>
            )}
          </InfoContainer>
        </Wrapper>
      ) : (
        <Error />
      )}
    </>
  );
};

const ButtonNotice = styled.button`
  margin-left: 3px;
  width: 100px;
  text-decoration: none;
  color: white;
  border-radius: 10px;
  padding: 4px;
  background-color: #c83349;
  border: none;
  &:hover {
    filter: brightness(85%);
  }
`;
const WrapperNotice = styled.div``;

const Icon = styled.div``;
const SubTitle = styled.div`
  border-bottom: 2px solid black;
  padding-bottom: 10px;
  font-weight: bold;
`;

const SportTitle = styled.div``;
const SportWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;
const SportDivider = styled.div`
  border: 2px solid black;
  position: relative;
  height: 180px;
  margin-left: 40px;

  width: 80%;
  bottom: -50px;
`;

const GoalComplete = styled.div`
  margin-top: 5px;
  width: 150px;
  font-size: 25px;
  margin-top: 30px;
  position: relative;
  left: 120px;
  margin-bottom: 10px;
`;

const Input = styled.input``;
const Reset = styled.button`
  position: relative;

  margin-top: 10px;
  width: 100px;
  text-decoration: none;
  color: white;
  border-radius: 10px;
  padding: 4px;
  background-color: #c83349;
  border: none;
  &:hover {
    filter: brightness(85%);
  }
`;

const Bold = styled.span`
  font-weight: bold;
  margin-left: 4px;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
const Sucess = styled.div``;
const Goal = styled.div``;
const InfoContainer = styled.div`
  margin: 50px 0px 0px 20px;
  border: solid 2px black;
  width: 400px;
  height: 600px;
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
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Image = styled.img`
  border-radius: 50%;
`;
const Wrapper = styled.div`
  padding: 0px;
  margin-right: 100px;
`;

export default ProfileCard;
