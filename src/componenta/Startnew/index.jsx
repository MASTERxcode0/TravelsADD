import React from "react";
import { useNavigate } from "react-router-dom"; // React Router navigatsiya uchun
import styles from "../Startnew/index.module.css";
import travel from "../../assets/images/next step travel.png";

function Card() {
  const navigate = useNavigate(); // Yo'naltirish uchun hook

  const handleStartNow = () => {
    navigate("/register"); // Ro'yxatdan o'tish sahifasiga yo'naltirish
  };

  return (
    <div className={styles.card}>
      <img src={travel} alt="Travel" className={styles.image} />
      <h1 className={styles.title}>NextStepTravel</h1>
      <p className={styles.description}>
        Plan, Navigate, Explore, Book, Enjoy, Support
      </p>
      <button className={styles.button} onClick={handleStartNow}>
        Start now
      </button>
    </div>
  );
}

export default Card;
