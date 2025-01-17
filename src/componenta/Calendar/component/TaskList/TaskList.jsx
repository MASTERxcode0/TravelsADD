import React, { useState } from "react";
import styles from "./TaskList.module.css";

function TaskList({ tasks, onAddTask, onToggleTask }) {
  const [newTask, setNewTask] = useState("");
  const [selectedDay, setSelectedDay] = useState("Monday");

  const handleAddTask = () => {
    if (newTask.trim()) {
      onAddTask(selectedDay, newTask.trim());
      setNewTask("");
    }
  };

  return (
    <div className={styles.taskList}>
      <div className={styles.addTask}>
        <select
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
          className={styles.daySelector}
        >
          {[
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ].map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Enter task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className={styles.taskInput}
        />
        <button onClick={handleAddTask} className={styles.addButton}>
          Add Task
        </button>
      </div>
      <ul className={styles.taskItems}>
        {tasks
          .filter((task) => task.day === selectedDay)
          .map((task) => (
            <li
              key={task.id}
              className={`${styles.taskItem} ${
                task.completed ? styles.completed : ""
              }`}
              onClick={() => onToggleTask(task.id)}
            >
              {task.task}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default TaskList;
