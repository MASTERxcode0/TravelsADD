import React, { useState, useEffect } from "react";
import styles from "./Card.module.css"; // CSS Module importi
import "aos/dist/aos";

const Card = ({ title, rating }) => {
  const [liked, setLiked] = useState(false);
  const images = [
    "https://picsum.photos/id/237/300/200",
    "https://picsum.photos/id/239/300/200",
    "https://picsum.photos/id/236/300/200",
  ];
  const handleLike = () => {
    setLiked(!liked);
  };

  // Karusel uchun dinamik ID generatsiya qilish
  const carouselId = `carousel-${title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className={`${styles.card} `}>
      {/* Title va rating */}
      <div className="card-header">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Rating: {rating}⭐</p>
      </div>

      {/* Bootstrap Karusel */}
      {images.length > 0 ? (
        <div  id={carouselId} className="carousel slide">
          <div className="carousel-inner">
            {images.map((image, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  src={image}
                  className="d-block w-100"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={`#${carouselId}`}
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target={`#${carouselId}`}
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      ) : (
        <p className="text-muted text-center">No images available</p>
      )}

      {/* Like tugmasi */}
      <div className="card-body">
        <button
          className={`btn ${liked ? "btn-danger" : "btn-outline-danger"}`}
          onClick={handleLike}
        >
          {liked ? "Liked ❤️" : "Like ❤️"}
        </button>
      </div>
    </div>
  );
};

export default Card;
