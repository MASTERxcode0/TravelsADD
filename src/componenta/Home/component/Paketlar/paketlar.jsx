import React from "react";
import Samarqand from "../../../../assets/images/samarqand.jpg";
import Samarqand3 from "../../../../assets/images/samarqand3.jpg";
import Samarqand2 from "../../../../assets/images/samarqans2.jpg";

const CategoryCards = () => {
  const packages = [
    {
      name: "Premium Package",
      description: "This package includes all the benefits.",
      price: "150,000",
      image: Samarqand,
    },
    {
      name: "Standard Package",
      description: "Designed for average requirements.",
      price: "100,000",
      image: Samarqand2,
    },
    {
      name: "Mini Package",
      description: "Affordable and useful choice.",
      price: "50,000",
      image: Samarqand3,
    },
  ];

  return (
    <div className="container mt-4">
      <div
        className="d-flex overflow-auto gap-3"
        style={{ scrollBehavior: "smooth" }}
      >
        {packages.map((pack, index) => (
          <div
            key={index}
            className="card flex-shrink-0 shadow-sm"
            style={{ width: "300px" }}
          >
            <img
              src={pack.image}
              className="card-img-top"
              alt={pack.name}
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{pack.name}</h5>
              <p className="card-text text-muted">{pack.description}</p>
              <div className="mt-auto">
                <p className="text-success fw-bold">Price: {pack.price} UZS</p>
                <button className="btn btn-primary w-100">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;
