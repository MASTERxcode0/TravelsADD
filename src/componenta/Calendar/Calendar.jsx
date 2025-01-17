import React, { useState } from "react";
import WeekScheduler from "./component/WeekScheduler/WeekScheduler";
import styles from "./Calendar.module.css";

function Calendar() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (day, task) => {
    setTasks((prevTasks) => [...prevTasks, { day, task, id: Date.now() }]);
  };

  const handleToggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.taskSection}>
        <WeekScheduler tasks={tasks} onToggleTask={handleToggleTask} />
      </div>
    </div>
  );
}

export default Calendar;
