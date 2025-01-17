import React, { useState } from "react";
import TaskList from "../TaskList/TaskList";
import WeekPicker from "../WeekPicker/WeekPicker";
import styles from "./WeekScheduler.module.css";

function WeekScheduler() {
  const [tasks, setTasks] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const addTask = (day, task) => {
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), day, task, completed: false },
    ]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Task Scheduler</h2>
      <WeekPicker selectedDate={selectedDate} onDateChange={setSelectedDate} />
      <TaskList
        tasks={tasks}
        onAddTask={addTask}
        onToggleTask={toggleTaskCompletion}
      />
    </div>
  );
}

export default WeekScheduler;
