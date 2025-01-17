import React, { useEffect } from "react";
import AOS from "aos"; // AOS kutubxonasini import qilish
import "aos/dist/aos.css"; // AOS uslubini import qilish
import { FaMountain, FaUtensils, FaTree, FaLandmark, FaShoppingBag } from "react-icons/fa"; // Corrected the last icon
import { GiCastle } from "react-icons/gi"; // Qo‘shimcha ikonlar
import styles from "./Divcard.module.css"; // CSS modulni import qilish

function TouristSpots() {
  const spots = [
    { id: 1, icon: <GiCastle />, text: "Castle" },
    { id: 2, icon: <FaMountain />, text: "Mountain" },
    { id: 3, icon: <FaUtensils />, text: "Restaurant" },
    { id: 4, icon: <FaTree />, text: "Park" },
    { id: 5, icon: <FaLandmark />, text: "Museum" },
    { id: 6, icon: <FaShoppingBag />, text: "Shopping Mall" }, // Replaced the missing icon
  ];

  useEffect(() => {
    AOS.init({
      duration: 800, // Animatsiya davomiyligi (ms)
      once: true, // Faqat bir marta ishlash
    });
  }, []);

  return (
    <div className={styles.iconsGrid}>
      {spots.map((spot) => (
        <div
          key={spot.id}
          className={styles.iconItem}
          data-aos="fade-up" // AOS animatsiyasini qo‘shish
        >
          <span className={styles.icon}>{spot.icon}</span>
          <span className={styles.text}>{spot.text}</span>
        </div>
      ))}
    </div>
  );
}

export default TouristSpots;
