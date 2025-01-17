import React, { useState, useEffect } from "react";
import AOS from "aos";
import { Menu } from "lucide-react";
import "aos/dist/aos.css"; // AOS CSS-ni ulash
import styles from "./Header.module.css";
import logo from "../../../../assets/images/next step travel.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Animatsiya davomiyligi 1000ms
  }, []);

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo} data-aos="fade-right">
        <img src={logo} alt="Next Step Travel" />
      </div>
      {/* Kompaniya nomi */}
      <div className={styles.companyName} data-aos="fade-up">
        Welcome to NextStepTravel!
      </div>
      {/* Navigatsiya menyusi */}
      <nav className={styles.nav} data-aos="fade-left">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
      {/* Hamburger menyu */}
      <Menu
        className={styles.hamburger}
        onClick={toggleMenu}
        data-aos="fade-left"
      ></Menu>

      {/* Dropdown menyu */}
      {menuOpen && (
        <div
          className={styles.menu}
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
        >
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
