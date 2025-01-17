import React from "react";
import style from "./cards.module.css"; // Custom CSS

function Card(props) {
  const {
    firstName,
    lastName,
    phone,
    image,
    address: { region, zip },
  } = props.data;

  return (
    <div  className={`${style.card} card `} style={{ width: "49%" }}>
      {/* Image */}
      <img
        src={image}
        className="card-img-top"
        alt={`${firstName} ${lastName}`}
      />

      {/* Card Body */}
      <div className="card-body">
        <h5 className="card-title">{`${firstName} ${lastName}`}</h5>
        <p className="card-text">
          Contact: {phone} <br />
          Address: {region}, {zip}
        </p>
      </div>

      {/* List Group */}
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Region: {region}</li>
        <li className="list-group-item">ZIP: {zip}</li>
      </ul>

      {/* Links */}
      <div className="card-body">
        <a href="#" className="card-link">
          Profile Link
        </a>
        <a href="#" className="card-link">
          More Info
        </a>
      </div>
    </div>
  );
}

export default Card;
