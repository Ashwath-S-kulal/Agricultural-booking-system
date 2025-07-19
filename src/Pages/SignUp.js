import React, { useState } from 'react';
import './Singup.css';
const RegistrationForm = () => {
  const [form, setForm] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
    gender: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    email: '',
    mobile: '',
    acres: '',
    cropType: '',
    landType: '',
    cropGrowing: '',
    comments: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', form);
    alert('Form submitted!');
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <h2>Sign In Form</h2>
      <p>Fill out the form carefully</p>

      <div className="row">
        <input name="firstName" placeholder="First Name" onChange={handleChange} required />
        <input name="middleName" placeholder="Middle Name" onChange={handleChange} />
        <input name="lastName" placeholder="Last Name" onChange={handleChange} required />
      </div>

      <div className="row">
        <select name="birthMonth" onChange={handleChange} required>
          <option value="">Month</option>
          {[...Array(12)].map((_, i) => (
            <option key={i+1} value={i+1}>{i+1}</option>
          ))}
        </select>
        <select name="birthDay" onChange={handleChange} required>
          <option value="">Day</option>
          {[...Array(31)].map((_, i) => (
            <option key={i+1} value={i+1}>{i+1}</option>
          ))}
        </select>
        <select name="birthYear" onChange={handleChange} required>
          <option value="">Year</option>
          {[...Array(100)].map((_, i) => {
            const year = new Date().getFullYear() - i;
            return <option key={year} value={year}>{year}</option>;
          })}
        </select>
        <select name="gender" onChange={handleChange} required>
          <option value="">Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>

      <input name="address1" placeholder="Street Address" onChange={handleChange} required />
      <input name="address2" placeholder="Street Address Line 2" onChange={handleChange} />
      
      <div className="row">
        <input name="city" placeholder="City" onChange={handleChange} required />
        <input name="state" placeholder="State / Province" onChange={handleChange} required />
      </div>
      <input name="zip" placeholder="Postal / Zip Code" onChange={handleChange} required />

      <div className="row">
        <input name="email" placeholder="E-mail" onChange={handleChange} />
        <input name="mobile" placeholder="Mobile Number" onChange={handleChange} required />
      </div>

      <div className="row">
        <input name="acres" placeholder="Acres of Land" onChange={handleChange} required />
        <select name="cropType" onChange={handleChange} required>
          <option value="">Select Crop Type</option>
          <option>Grains</option>
          <option>Legumes</option>
          <option>Fruits</option>
          <option>Vegetables</option>
          <option>Tubers</option>
        </select>
      </div>

      <div className="row">
        <select name="landType" onChange={handleChange} required>
          <option value="">Select Land Type</option>
          <option>Agricultural Land</option>
          <option>Forest Land</option>
          <option>Urban Land</option>
          <option>Water Bodies</option>
          <option>Barren Land</option>
        </select>
        <input name="cropGrowing" placeholder="What Crop You Growing" onChange={handleChange} required />
      </div>

      <textarea name="comments" placeholder="Additional Comments" rows="4" onChange={handleChange}></textarea>

      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
