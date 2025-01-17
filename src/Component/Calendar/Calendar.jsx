import React, { useState } from "react";
import "./Calendar.css";

const Calendar = ({ moodData }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  // const dates = Array.from({ length: 31 }, (_, i) => i + 1);
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = getDaysInMonth(year, month);
    const calendarDays = [];

    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="empty-day"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      calendarDays.push(
        <div key={day} className="day">
          {day}
        </div>
      );
      {
        // dates.map((date) => (
        //   <div key={date} className="calendar-date">
        //     {date}
        //     <div className="emoji">{moodData[date]}</div>
        //   </div>
        // ));
      }
    }

    return calendarDays;
  };

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  return (
    <div className="calendar-container">
      <div className="calendar-containers"></div>
      <div className="calendar-header">
        <button onClick={prevMonth}>Prev</button>
        <h2>
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <button onClick={nextMonth}>Next</button>
      </div>
      <div className="calendar-grid">
        {daysOfWeek.map((day) => (
          <div key={day} className="day-name">
            {day}
          </div>
        ))}
        {generateCalendar()}
      </div>
    </div>
  );
};

export default Calendar;
