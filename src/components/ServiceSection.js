import React from "react";
import './ServiceSection.css'; 

const Services = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        <div className="service-card">
          <div className="icon">🚜</div>
          <h3>Machinery Rental</h3>
          <p>
            Access to a wide range of agricultural machinery including tractors,
            harvesters, and specialized equipment.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">👨‍🌾</div>
          <h3>Workforce Solutions</h3>
          <p>
            Connect with skilled agricultural workers for harvesting, planting,
            and other farming operations.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">🌱</div>
          <h3>Seasonal Support</h3>
          <p>
            Get timely assistance during peak farming seasons when demand for
            machinery and labor is high.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">📍</div>
          <h3>Local Connections</h3>
          <p>
            Find contractors in your area to minimize travel time and maximize
            efficiency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
