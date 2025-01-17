import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrapni style import qilish
import { MapPin, Compass, Utensils, User } from "lucide-react"; // Lucide-react ikonkalari
import "./Divcard.css"; // Maxsus CSS fayli

function IconsGrid() {
  const navigate = useNavigate(); // useNavigate hook

  const items = [
    { id: 1, icon: <Compass />, path: "/Explore" },
    { id: 2, icon: <MapPin />, path: "/destinations" },
    { id: 3, icon: <Utensils />, path: "/dining" },
    { id: 4, icon: <User />, path: "/Yolboshlovchi" },
  ];

  const handleClick = (path) => {
    navigate(path); // Yo'nalishga o'tish
  };

  return (
    <div className="container  mt-8">
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {items.map((item) => (
          <button
            key={item.id}
            className="btn btn-light shadow-sm rounded-circle d-flex align-items-center justify-content-center"
            onClick={() => handleClick(item.path)}
          >
            <div style={{ fontSize: "24px", color: "#226160" }}>{item.icon}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default IconsGrid;
