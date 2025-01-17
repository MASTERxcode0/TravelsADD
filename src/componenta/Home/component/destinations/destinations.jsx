import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Destinations.module.css"; // Styles import

const Destinations = () => {
  const navigate = useNavigate(); // useNavigate hook

  // Destinations data array
  const destinations = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Destination ${index + 1}`,
    description: `Description for destination ${index + 1}`,
    image: `https://picsum.photos/id/${index + 1}/300/200`,
  }));

  // Check if destinations array is empty
  if (!destinations || destinations.length === 0) {
    return <p>No destinations available.</p>;
  }

  // Redirect handler
  const handleRedirect = (destination) => {
    navigate(`/destination/${destination.id}`); // Redirect to specific destination page
  };

  return (
    <div className={styles.container}>
      {destinations.map((destination) => (
        <div key={destination.id} className={styles.destination}>
          <img
            src={destination.image}
            alt={destination.name}
            className={styles.image}
          />
          <h2>{destination.name}</h2>
          <p>{destination.description}</p>
          <button onClick={() => handleRedirect(destination)}>Go to Map</button>
        </div>
      ))}
    </div>
  );
};

export default Destinations;
