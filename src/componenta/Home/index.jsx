import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import Header from "./component/Header/header";
import Sorch from "./component/Sorch/sorch";
import Card from "./component/Card/Card";
import Divcard from "./component/Divcard/Divcard";
import Paketlar from "./component/Paketlar/paketlar";
import Cards from "./component/Cards/cards";
import cars from "../../assets/data.json";
import AOS from "aos";
import "aos/dist/aos.css"; // CSS styles for AOS

const Home = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) =>
        prevCounter === 2 ? Math.floor(Math.random() * 110) : prevCounter + 1
      );
    }, 3000);

    return () => clearInterval(interval); // Komponent tugaganda intervalni to'xtatish
  }, []);

  useEffect(() => {
    AOS.init(); // AOS animatsiyasini boshlash
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <h1 className={styles.h1} data-aos="zoom-in-up">Where to next?</h1> {/* Animatsiya qo‘shildi */}

      {/* Animatsiya qo‘shildi */}
      <Sorch className="link-body-emphasis" />
      <Divcard data-aos="fade-left" /> {/* Animatsiya qo'shilgan */}

      <Paketlar />
      <Card
        image={`https://picsum.photos/id/${counter}/300/100`}
        title="Amazing Plane"
        rating={4}
        items={["Item 1", "Item 2", "Item 3"]}
        data-aos="fade-right" // Animatsiya uchun qo'shilgan
      />
      <div className={styles.Users}>
        {cars.length > 0 &&
          cars.map((car) => (
            <Cards data={car} key={car.id || car.name} data-aos="zoom-in" />
          ))}{" "}
        {/* Animatsiya qo'shilgan */}
      </div>
    </div>
  );
};

export default Home;
