import React, { useState } from "react";
import MoodSelector from "./MoodSelector";
import Calendars from "./Calendars";
import Calendar from "./Calendar";
import "./MoodTracker.css";

const MoodTracker = () => {
  const [moodData, setMoodData] = useState({});

  const handleMoodSelect = (date, mood) => {
    setMoodData({ ...moodData, [date]: mood });
  };

  return (
    <div className="mood-tracker-container">
      <MoodSelector onMoodSelect={handleMoodSelect} />
      <Calendars moodData={moodData} />
      {/* <Calendar moodData={moodData} /> */}
    </div>
  );
};

export default MoodTracker;
