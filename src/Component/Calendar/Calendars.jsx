import React from "react";
import "./MoodTracker.css";

const Calendars = ({ moodData }) => {
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="calendar-containers">
      {dates.map((date) => (
        <div key={date} className="calendar-date">
          {date}
          <div className="emoji">{moodData[date]}</div>
        </div>
      ))}
    </div>
  );
};

export default Calendars;
