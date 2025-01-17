import React from "react";
import Login from "./Component/Login/Login";
import Signup from "./Component/SignUp/Signup";
import Navbar from "./Component/Navbar/Navbar";
import Calendar from "./Component/Calendar/Calendar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoodSelector from "./Component/Calendar/MoodSelector";
import Calendars from "./Component/Calendar/Calendars";
import MoodTracker from "./Component/Calendar/MoodTracker";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/calendars" element={<Calendars />} />
        <Route path="/moodselector" element={<MoodSelector />} />
        <Route path="/moodtracker" element={<MoodTracker />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
