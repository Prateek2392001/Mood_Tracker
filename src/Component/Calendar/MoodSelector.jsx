import React, { useState } from "react";
import "./MoodTracker.css";

const moods = [
  { label: "Very Happy", emoji: "😁" },
  { label: "Happy", emoji: "😊" },
  { label: "Neutral", emoji: "😐" },
  { label: "Sad", emoji: "☹️" },
  { label: "Very Sad", emoji: "😭" },
];

const MoodSelector = ({ onMoodSelect }) => {
  const [selectedMood, setSelectedMood] = useState(moods[0]);
  const [selectedDate, setSelectedDate] = useState(1);

  const handleSubmit = () => {
    onMoodSelect(selectedDate, selectedMood.emoji);
  };

  return (
    <div className="mood-selector">
      <div className="mood-options">
        {moods.map((mood) => (
          <div
            key={mood.label}
            className={`mood-item ${
              selectedMood.label === mood.label ? "selected" : ""
            }`}
            onClick={() => setSelectedMood(mood)}
          >
            {mood.emoji}
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="counter">
        <input
          type="number"
          min="1"
          max="31"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
        <button onClick={handleSubmit}>Set Mood</button>
      </div>
    </div>
  );
};

export default MoodSelector;
