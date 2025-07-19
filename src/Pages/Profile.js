import React from 'react';
import './Profile.css'; // Assuming you have a CSS file for styling
import Image from '../Images/profile.png'
const FarmerProfilePage = () => {
  const farmer = {
    firstName: "Ravi",
    middleName: "Kumar",
    lastName: "Verma",
    birthDate: { day: "14", month: "July", year: "1985" },
    gender: "Male",
    address: {
      line1: "Village No. 3, Main Road",
      line2: "Near Post Office",
      city: "Nashik",
      state: "Maharashtra",
      zip: "422003"
    },
    email: "ravi.verma@example.com",
    mobile: "+91 9876543210",
    phone: "0253-2456789",
    work: "0253-9988776",
    company: "Green Harvest Co-op",
    course: "Organic Farming",
    comments: "Interested in new irrigation technology."
  };

  return (
    <div className="profile-page">
      <h1>Farmer Profile</h1>
      
      <div className="profile-sections">
        <div style={{display:"flex", gap:"20px", width:"100%"}} className='profile-card'>
          <img src={Image} alt="img" style={{ width:"200px",borderRadius:"10px"}}></img>
          <div className="profile-card1">
            <h2>Personal Information</h2>
            <p><strong>Full Name:</strong> {`${farmer.firstName} ${farmer.middleName} ${farmer.lastName}`}</p>
            <p><strong>Date of Birth:</strong> {`${farmer.birthDate.day} ${farmer.birthDate.month}, ${farmer.birthDate.year}`}</p>
            <p><strong>Gender:</strong> {farmer.gender}</p>
          </div>
        </div>
        

        <div className="profile-card">
          <h2>Address</h2>
          <p>{farmer.address.line1}</p>
          <p>{farmer.address.line2}</p>
          <p>{`${farmer.address.city}, ${farmer.address.state} - ${farmer.address.zip}`}</p>
        </div>

        <div className="profile-card">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> {farmer.email}</p>
          <p><strong>Mobile:</strong> {farmer.mobile}</p>
          <p><strong>Phone:</strong> {farmer.phone}</p>
          <p><strong>Work Number:</strong> {farmer.work}</p>
        </div>

        <div className="profile-card">
          <h2>Farming Details</h2>
          <p><strong>Company:</strong> {farmer.company}</p>
          <p><strong>Farming Type:</strong> {farmer.course}</p>
        </div>

        <div className="profile-card">
          <h2>Additional Comments</h2>
          <p>{farmer.comments}</p>
        </div>
      </div>
    </div>
  );
};

export default FarmerProfilePage;
