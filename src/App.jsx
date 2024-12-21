import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Start from "./pages/Start";
import UserLogin from "./pages/userLogin";
import UserRegistration from "./pages/UserRegistration";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainRegistration from "./pages/CaptainRegistration";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Start />}></Route>
          <Route path="/user-login" element={<UserLogin />}></Route>
          <Route path="/user-registration" element={<UserRegistration />}></Route>
          <Route path="/captain-login" element={<CaptainLogin />}></Route>
          <Route path="/captain-registration" element={<CaptainRegistration />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
