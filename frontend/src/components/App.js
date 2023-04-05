import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Homepage from "./Homepage";
import Header from "./Header";
import Profile from "./Profile";
import UploadActivity from "./UploadActivity";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/activity" element={<UploadActivity />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

// const Container = styled.div`
//   margin-top: 0;
// `;
export default App;
