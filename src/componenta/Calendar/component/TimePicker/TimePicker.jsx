import React, { useState } from "react";
import styles from "./TimePicker.module.css";

function TimePicker({ onTimeSelect }) {
  const [time, setTime] = useState("");

  const handleTimeChange = (e) => {
    const selectedTime = e.target.value;
    setTime(selectedTime);
    onTimeSelect(selectedTime);
  };

  return (
    <div className={styles.timePicker}>
      <label htmlFor="time">Select Time:</label>
      <input
        type="time"
        id="time"
        value={time}
        onChange={handleTimeChange}
        className={styles.input}
      />
    </div>
  );
}

export default TimePicker;
