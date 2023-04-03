import styled from "styled-components";
import { useState } from "react";

const UploadActivity = () => {
  const [formData, setFormData] = useState({unit:"kilometers"});
  const [distance, setDistance] = useState(["kilometers", "meters", "miles"]);
  const [duration, setDuration] = useState([
    { id: "duration-hours", name: "hr" },
    { id: "duration-minutes", name: "min" },
    { id: "duration-seconds", name: "s" },
  ]);
  const [sport, setSport] = useState(["run", "swim", "bike"]);
  const [selectedPizza, setSelectedPizza] = useState([]);
  const handleChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };
  return (
    <Form>
      <Title>Log an activity</Title>
      <InputContainer>
        <Label htmlFor="distance">Distance </Label>

        <Input
          type="text"
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
        <Label htmlFor="duration">Duration(hours/minutes/seconds) </Label>

        {duration.map((unit) => {
          return (
            <Input
              placeholder={unit.name}
              key={unit.id}
              type="text"
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
        <Label htmlFor="date">Date and time </Label>

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
        <Input
          type="text"
          id="title"
          name="title"
          onChange={(e) => handleChange(e.target.id, e.target.value)}
        />
      </InputContainer>

      <InputContainer>
        <Label htmlfor="description">Description</Label>
        <TextArea
          placeholder="How did your workout go?"
          id="description"
          name="description"
          onChange={(e) => handleChange(e.target.id, e.target.value)}
        ></TextArea>
      </InputContainer>
      <Create
        onClick={() => {
          console.log(formData);
        }}
      >
        Create{" "}
      </Create>
    </Form>
  );
};
const Create = styled.button``;
const TextArea = styled.textarea`
  height: 200px;
  width: 200px;
`;

const Title = styled.div``;
const Label = styled.label`
  font-size: 20px;
  color: black;
`;

const InputContainer = styled.div`
  margin-bottom: 5px;
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

const Form = styled.div`
  border: 4px solid black;
  width: 700px;
  height: 500px;
  text-align: center;
  margin: 0 auto;
  padding-top: 30px;
`;

export default UploadActivity;
