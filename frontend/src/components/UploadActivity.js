import styled from "styled-components";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Error from "./Error";
const UploadActivity = () => {
  const { user, isAuthenticated } = useAuth0();
  const [formData, setFormData] = useState({ unit: "kilometers" });
  const [distance, setDistance] = useState(["kilometers", "meters", "miles"]);
  const [duration, setDuration] = useState([
    { id: "duration-hours", name: "hr" },
    { id: "duration-minutes", name: "min" },
    { id: "duration-seconds", name: "s" },
  ]);
  const [sport, setSport] = useState(["run", "swim", "bike"]);

  const handleChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };
  return (
    <>
      {isAuthenticated ? (
        <Form>
          <Title>Log an activity</Title>
          <InputContainer>
            <Label htmlFor="distance">Distance </Label>

            <Input
              min="0"
              type="number"
              id="distance"
              onChange={(e) => handleChange(e.target.id, e.target.value)}
            />
            <select
              name="unit"
              id="unit"
              onChange={(e) => handleChange(e.target.id, e.target.value)}
            >
              {distance.map((unit) => {
                return <option key={unit}>{unit}</option>;
              })}
            </select>
          </InputContainer>

          <InputContainer>
            <LabelDuration htmlFor="duration">
              Duration(hours/minutes/seconds){" "}
            </LabelDuration>

            {duration.map((unit) => {
              return (
                <InputDate
                  min="0"
                  placeholder={unit.name}
                  key={unit.id}
                  type="number"
                  id={unit.id}
                  onChange={(e) => handleChange(e.target.id, e.target.value)}
                />
              );
            })}
          </InputContainer>
          <InputContainer>
            <Label htmlFor="sport">Sport </Label>
            <select name="sport" id="sport">
              {sport.map((sport) => {
                return <option key={sport}>{sport}</option>;
              })}
            </select>
          </InputContainer>
          <InputContainer>
            <Label htmlFor="date">Date and time: </Label>

            <Input
              name="date"
              type="date"
              id="date"
              onChange={(e) => handleChange(e.target.id, e.target.value)}
            />
            <Input
              name="time"
              type="time"
              id="time"
              onChange={(e) => handleChange(e.target.id, e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <Label htmlfor="title">Title</Label>
          </InputContainer>
          <InputTitle
            type="text"
            id="title"
            name="title"
            onChange={(e) => handleChange(e.target.id, e.target.value)}
          />

          <InputContainer>
            <Label htmlfor="description">Description</Label>
          </InputContainer>
          <TextArea
            placeholder="How did your workout go?"
            id="description"
            name="description"
            onChange={(e) => handleChange(e.target.id, e.target.value)}
          ></TextArea>
          <Create
            onClick={() => {
              console.log(formData);
            }}
          >
            Create{" "}
          </Create>
        </Form>
      ) : (
        <Error />
      )}
    </>
  );
};
const Create = styled.button`
  position: relative;
  right: 430px;
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
const TextArea = styled.textarea`
  height: 200px;
  width: 470px;
  margin-bottom: 50px;
  position: relative;
  left: 40px;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 50px;
`;
const LabelDuration = styled.label`
  margin-right: 50px;
  font-size: 20px;
  color: black;
`;

const Label = styled.label`
  font-size: 20px;
  color: black;
`;
const InputDate = styled.input`
  width: 100px;
`;
const InputContainer = styled.div`
  margin-bottom: 20px;
  width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  &:focus {
    outline: 3px solid black;
  }
`;

const InputTitle = styled.input`
  width: 475px;
  height: 20px;
`;

const Form = styled.div`
  width: 900px;
  height: 600px;
  text-align: center;
  margin: 0 auto;
  padding-top: 30px;
  border: 2px solid grey;
  border-radius: 10px;
  margin-top: 20px;
`;

export default UploadActivity;
