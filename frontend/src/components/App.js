import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          <Route path="/user-profile/:nickname" element={<Profile />} />
          <Route path="/activity" element={<UploadActivity />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
