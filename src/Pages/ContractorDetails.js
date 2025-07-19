import React from "react";
import { NavLink } from "react-router-dom";
import "./ContractorDetails.css"; 
import Image from "../Images/profile.png";
import Tractor from "../Images/Tractor.png";
import Rippers from "../Images/Rippers.png";
import Seeder from "../Images/Seeder.png";

function ContractorDetails (){
  return (
    <div className="contractor-details-container">
      <NavLink to="/contractor"><button className="back-button">← Back</button></NavLink>
      <h2 className="contractor-name-heading">John's Agro Services</h2>

      <div className="top-section">
        {/* Left Card */}
        <div className="card">
          <img src={Image} alt="Contractor" className="contractor-img"/>
          <h3>Contractor Name</h3>
          <p className="location">Location</p>
          <p className="rating">⭐ 4.5 (24 reviews)</p>
          <div className="contact-info">
            <p><strong>Contact Information</strong></p>
            <p>1234567890</p>
            <p>contractor@example.com</p>
            <p><strong>Business Hours</strong></p>
            <p>Mon - Fri: 8:00 AM – 6:00 PM</p>
            <p>Sat: 8:00 AM – 4:00 PM</p>
            <p>Sun: Closed</p>
          </div>
        </div>

        {/* Right About Section */}
        <div className="card about-card">
          <h3>About</h3>
          <p>This contractor provides agricultural services including harvesting, planting, and more. With years of experience in the field, they offer reliable and efficient services to farmers across the region.</p>
          <div className="about-info">
            <p><strong>Experience</strong><br />5 years</p>
            <p><strong>Team Size</strong><br />10 members</p>
            <p><strong>Service Area</strong><br />50 km radius from Ludhiana, Punjab</p>
          </div>
        </div>
      </div>

      <div className="mid-section">
        {/* Reviews */}
        <div className="card">
          <h3>Reviews</h3>
          <p>⭐⭐⭐⭐⭐<br />"Great service! Very professional and efficient."<br />- Farmer Singh</p>
          <p>⭐⭐⭐⭐☆<br />"Good work, but arrived a bit late."<br />- Farmer Patel</p>
        </div>

        {/* Available Machinery */}
        <div className="card">
          <h3 className="section-title">Available Machinery</h3>
          <div className="machinery-grid">
            <div className="machinery-card">
              <img src={Tractor} alt="Tractor" />
              <p><strong>Tractors</strong><br />3 available</p>
            </div>
            <div className="machinery-card">
              <img src={Rippers} alt="Harvester" />
              <p><strong>Rippers</strong><br />2 available</p>
            </div>
            <div className="machinery-card">
              <img src={Seeder} alt="Sprayer" />
              <p><strong>Seeder</strong><br />5 available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Offered */}
      <div className="card">
        <h3 className="section-title">Services Offered</h3>
        <ul className="service-list">
          <li>✔ Harvesting</li>
          <li>✔ Planting</li>
          <li>✔ Spraying</li>
          <li>✔ Tilling</li>
          <li>✔ Transportation</li>
        </ul>
      </div>

      {/* Availability Calendar Placeholder */}
      <div className="card">
        <h3 className="section-title">Availability Calendar</h3>
        <p>(Calendar integration coming soon)</p>
      </div>

      <NavLink to="/Booking" style={{textDecoration:"none"}}><button className="book-button">Book Now</button></NavLink>
    </div>
  );
};

export default ContractorDetails;
