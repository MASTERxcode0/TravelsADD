import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Layaut.css";
import AOS from "aos";
import anime from "animejs";
import { Home, Search, Calendar, User } from "lucide-react"; // Ikonalarni import qilish
import "aos/dist/aos.css"; // AOS uchun CSS fayl

function Layout({ children }) {
  const animationRef = useRef(null); // Anime.js uchun ref

  useEffect(() => {
    // AOS uchun sozlash
    const initAOS = () => {
      if (window.innerWidth <= 768) {
        AOS.init({
          duration: 400, // Mobil uchun davomiylik
          offset: 50, // Mobil uchun masofa
          once: true,
        });
      } else {
        AOS.init({
          duration: 800, // Desktop uchun davomiylik
          offset: 100,
          once: true,
        });
      }
    };

    initAOS();

    // Ekran o‘lchami o‘zgarsa, qayta sozlash
    window.addEventListener("resize", initAOS);
    return () => window.removeEventListener("resize", initAOS);
  }, []);
  setInterval(() => {
    anime({
      targets: ".nav-icon",
      rotate: 360, // To'liq aylanish
      duration: 2000, // Animatsiya davomiyligi
      easing: "easeInOutQuad",
      loop: false,
    });
  }, 2000); // Har 5 soniyada ishga tushadi


  return (
    <div className="layout">
      <main className="main-content">{children}</main> {/* Asosiy kontent */}
      <footer className="footer">
        <nav className="bottom-nav">
          {[
            { path: "/", label: "Home", icon: <Home /> },
            { path: "/Searchs", label: "Explore", icon: <Search /> },
            { path: "/calendar", label: "Booking", icon: <Calendar /> },
            { path: "/account", label: "Account", icon: <User /> },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="nav-item"
              data-aos="flip-left"
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </Link>
          ))}
        </nav>
      </footer>
    </div>
  );
}

export default Layout;
