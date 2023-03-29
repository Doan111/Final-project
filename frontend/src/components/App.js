import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Homepage from "./Homepage";
import Header from "./Header";
import SignUp from "./SignUp.Js";
import LogIn from "./LogIn";
function App() {
  return (
    <Container>
      <BrowserRouter>
      <Header/>
        <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/signup" element={<SignUp/>}/>

        </Routes>

      </BrowserRouter>
    </Container>
  );
}

const Container = styled.div`
  margin-top:0;
`;
export default App;
