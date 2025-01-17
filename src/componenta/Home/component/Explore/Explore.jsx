import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrapni ulash
import "aos/dist/aos.css"; // AOS CSS
import AOS from "aos"; // AOS import
import "./ExploreComponent.css"; // O'zingizning stil faylingizni ulash

const ExploreComponent = () => {
  // AOSni ishga tushirish
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animatsiya davomiyligi 1 soniya
      once: true, // Animatsiya faqat bir marta ishlaydi
    });
  }, []);

  // Destinatsiyalar ro'yxati
  const destinations = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `City ${index + 1}`,
    image: `https://picsum.photos/id/${index + 1}/200/300`, // Har bir shahar uchun tasvir URL
    description: `Description for City ${index + 1}.`,
  }));

  return (
    <div className="CarsContiner  my-5">
      <h2 className="text-center mb-4">Explore Destinations</h2>
      <div className="row">
        {destinations.map((destination) => (
          <div key={destination.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card shadow-sm h-100">
              <img
                src={destination.image}
                alt={destination.name}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{destination.name}</h5>
                <p className="card-text text-muted">
                  {destination.description}
                </p>
                <button className="btn btn-primary btn-sm w-100">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreComponent;
