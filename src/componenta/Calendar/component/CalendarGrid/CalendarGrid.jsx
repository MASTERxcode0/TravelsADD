import React from "react";
import styles from "./CalendarGrid.module.css";

function CalendarGrid({ onDateSelect }) {
  const today = new Date();
  const daysInMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  ).getDate();

  const handleDateClick = (day) => {
    const date = new Date(today.getFullYear(), today.getMonth(), day);
    onDateSelect(date);
  };

  const renderDays = () => {
    let days = [];
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <div
          key={day}
          className={styles.day}
          onClick={() => handleDateClick(day)}
        >
          {day}
        </div>
      );
    }
    return days;
  };

  return <div className={styles.grid}>{renderDays()}</div>;
}

export default CalendarGrid;
