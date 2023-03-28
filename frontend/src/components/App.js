import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Homepage from "./Homepage";
import Header from "./Header";


function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Header/>}/>
        </Routes>

      </BrowserRouter>
    </Container>
  );
}

const Container = styled.div`
  margin-top:0;
`;
export default App;
