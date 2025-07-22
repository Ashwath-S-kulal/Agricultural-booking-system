import React from 'react'
import "./Home.css"
import { NavLink } from 'react-router-dom';
import Tractor from "../Images/Tractor.png"
import Seeder from "../Images/Seeder.png"
import Combine from "../Images/Combine.png"
import Rippers from "../Images/Rippers.png"
import frontendloader from "../Images/front end loader.png"
import Trackedtractor from "../Images/tracked tractor.png"
import Treeshaker from "../Images/tree shaker.png"
import Escavator from "../Images/escavator.png"
import MiniLoader from "../Images/mini loader.png"
import Truckcane from "../Images/truck cane.png"

const Bookings = [
  {
    name: 'Tractor',
    image: Tractor,
    title: 'Book your tractor, available for all your needs',
  },
  {
    name: 'Seeder',
    image: Seeder,
    title: 'Book your Seeder, available for all your needs',
  },
  {
    name: 'Combine',
    image: Combine,
    title: 'Book your Combine, available for all your needs',
  },
  {
    name: 'Rippers',
    image: Rippers,
    title: 'Book your Rippers, available for all your needs',
  },
  {
    name: 'front end loader',
    image: frontendloader,
    title: 'Book your tractor, available for all your needs',
  },
  {
    name: 'Tracked tractor',
    image: Trackedtractor,
    title: 'Book your tractor, available for all your needs',
  },
  {
    name: 'Tree shaker',
    image: Treeshaker,
    title: 'Book your tractor, available for all your needs',
  },
  {
    name: 'Escavator',
    image: Escavator,
    title: 'Book your tractor, available for all your needs',
  },
  {
    name: 'Mini loader',
    image: MiniLoader,
    title: 'Book your tractor, available for all your needs',
  },
  {
    name: 'Truck cane',
    image: Truckcane,
    title: 'Book your tractor, available for all your needs',
  },
];
function Home() {
  return (
          <section className="hero-container">
          <div className="hero-left">
            <h1>
              Agricultural Booking system <br />
            </h1>
            <p>
              This project focuses on bridging the gap between farmers and
               contractors in the agricultural sector through a digital platform.
                The primary goal is to streamline the availability and booking of farming equipment.
                This system not only improves access to essential farming equipment for small and
                 mid-scale farmers but also helps contractors optimize the use of their assets.
                  By facilitating this connection, the platform promotes resource sharing,
                   reduces idle machinery time, and enhances agricultural productivity overall.
            </p>
            <NavLink to="/about"><button className="read-more">READ MORE</button></NavLink>
            
          </div>
          <div className="hero-right">
            <h3 style={{background:"#0fa9bdff" , padding:"12px",color:"white", marginTop:"0px",
              position:"sticky",top:"0",textAlign:"center",fontWeight:"lighter"
            }}>Recommendations</h3>
            {Bookings.map((Booking, index) => (
              <div className="booking-banner">
                <div className="booking-content">
                   <img src={Booking.image} alt="Booking Icon" className="booking-icon" />
                  <div className="booking-text">
                    <h2>{Booking.name}</h2>
                    <p>{Booking.title}</p>
                    <NavLink to="/Booking"><button className="booking-button">Book Now</button></NavLink>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section> 
  )
}

export default Home;