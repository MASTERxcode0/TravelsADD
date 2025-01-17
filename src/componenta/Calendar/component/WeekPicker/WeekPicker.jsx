import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./WeekPicker.module.css";

function WeekPicker({ selectedDate, onDateChange }) {
  const handleDateChange = (date) => {
    onDateChange(date);
  };

  return (
    <div className={styles.weekPicker}>
      <Calendar
        value={selectedDate}
        onChange={handleDateChange}
        selectRange={false}
      />
    </div>
  );
}

export default WeekPicker;
