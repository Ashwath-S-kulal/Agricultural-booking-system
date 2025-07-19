import Image from '../Images/profile.png'
import { NavLink } from "react-router-dom";
import "./Contractor.css"; 
const contractors = [
  {
    name: "John's Agro Services",
    location: "Punjab",
    machinery: ["Tractors", "Harvesters"],
    image: Image,
    info: "John's Agro Services provides top-notch agricultural machinery for efficient farming operations. Located in Punjab, they specialize in tractors and harvesters, ensuring high productivity for farmers.",
  },
  {
    name: "Singh Farming Solutions",
    location: "Haryana",
    machinery: ["Harvesters", "Sprayers"],
    image: Image,
    info: "Singh Farming Solutions is a leading provider of agricultural equipment in Haryana. They offer a range of machinery including harvesters and sprayers, designed to enhance farming efficiency and yield.",
  },
  {
    name: "GreenGrow Equipments",
    location: "Maharashtra",
    machinery: ["Seed Drills", "Ploughs", "Tractors"],
    image: Image,
    info: "GreenGrow Equipments specializes in high-quality agricultural machinery in Maharashtra. Their offerings include seed drills, ploughs, and tractors, aimed at improving farming practices and crop production.",
  },
  {
    name: "AgroTech India",
    location: "Uttar Pradesh",
    machinery: ["Sprayers", "Tillers", "Mowers"],
    image: Image,
    info: "AgroTech India is committed to providing innovative agricultural solutions in Uttar Pradesh. They offer a variety of machinery such as sprayers, tillers, and mowers to support modern farming techniques.",
  },
  {
    name: "Harvest Hub",
    location: "Rajasthan",
    machinery: ["Harvesters", "Balers"],
    image: Image,
    info: "Harvest Hub is a premier provider of harvesting equipment in Rajasthan. They focus on delivering high-performance harvesters and balers to optimize the harvesting process for farmers.",
  },
  {
    name: "Krishi Mitra",
    location: "Bihar",
    machinery: ["Tractors", "Rotavators", "Cultivators"],
    image: Image,
    info: "Krishi Mitra is dedicated to supporting farmers in Bihar with reliable agricultural machinery. Their range includes tractors, rotavators, and cultivators, designed to enhance soil preparation and crop management.",
  },
  {
    name: "FarmEase Equipments",
    location: "Tamil Nadu",
    machinery: ["Ploughs", "Sprayers", "Mowers"],
    image: Image,
    info: "FarmEase Equipments offers a comprehensive range of agricultural machinery in Tamil Nadu. They provide ploughs, sprayers, and mowers to facilitate efficient farming operations and improve crop yields.",
  },
  {
    name: "AgroSmart Solutions",
    location: "Karnataka",
    machinery: ["Planters", "Seeders", "Tractors"],
    image: Image,
    info: "AgroSmart Solutions is a leading name in agricultural machinery in Karnataka. They specialize in planters, seeders, and tractors, helping farmers achieve better planting efficiency and crop management.",
  },
  {
    name: "GrowFast India",
    location: "Gujarat",
    machinery: ["Harvesters", "Balers", "Cultivators"],
    image: Image,
    info: "GrowFast India is focused on providing advanced agricultural equipment in Gujarat. Their offerings include harvesters, balers, and cultivators, aimed at enhancing productivity and sustainability in farming.",
  },
  {
    name: "Bharat Agro Machinery",
    location: "Andhra Pradesh",
    machinery: ["Rotavators", "Seed Drills", "Sprayers"],
    image: Image,
    info: "Bharat Agro Machinery is a trusted provider of agricultural machinery in Andhra Pradesh. They offer rotavators, seed drills, and sprayers to support efficient farming practices and improve crop yields.",
  },
];

const machineries = [
  "Machineries", // placeholder
  "Plough",
  "Rotavator",
  "Cultivator",
  "Harrow",
  "Leveler",
  "Subsoiler",
  "Seed Drill",
  "Planter",
  "Transplanter",
  "Sprayer",
  "Duster",
  "Weeder",
  "Reaper",
  "Binder",
  "Combine Harvester",
  "Threshers",
  "Winnower",
  "Baler",
  "Chaff Cutter",
  "Fodder Cutter",
  "Drip Irrigation System",
  "Sprinkler System",
  "Grain Cleaner",
  "Soil Testing Kit",
  "Rippers",
  "Combine",
  "Seeder",
  "Tractor"
];
const locations = [
  "Locations", // placeholder
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra ",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry"
];


function Contractor() {
  return (
    <div className="contractor-container">
      {/* Filter Bar */}
      <div className="filter-bar">
        <input type="text" placeholder="Search for contractors..." className="search-input" />
        <select className="dropdowncontractors">
          {machineries.map((machinery, idx) => (
            <option key={idx} >{machinery}</option>
          ))}          
        </select>
        
        <select className="dropdowncontractors">
          {locations.map((loc, idx) => (
            <option key={idx} >{loc}</option>
          ))}          
        </select>
        <input type="date" className="date-picker" />
        <button className="filter-button">Apply Filters</button>
      </div>

      <div className="card-list">
        {contractors.map((contractor, idx) => (
          <div className="contractor-card-horizontal-card" key={idx}>
            <div className='contractor-mob'>
              <img src={contractor.image} alt="Contractor" className="contractor-img-horizontal" />
              <div className='contractor-info-horizontal'>
                  <h3>{contractor.name}</h3>
                  <p >{contractor.info}</p>
              </div>
            </div>
            
            <div className="contractor-info">
              <h3 style={{marginBottom:"20px"}}>{contractor.name}</h3>
              <p >Location: {contractor.location}</p>
              <p >Machinery: {contractor.machinery.join(", ")}</p>
              <NavLink to="/contractorDetails" >  
              <button className="details-button">View Details</button>
              </NavLink>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contractor;
