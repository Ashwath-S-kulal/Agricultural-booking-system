// BookingPage.js
import React, { useState, useEffect } from "react";
import "./Booking.css";

const BookingPage = () => {
  const [booking, setBooking] = useState({
    farmerName: "",
    phone: "",
    address: "",
    farmerId: "",
    machineType: "",
    machineModel: "",
    rate: 0,
    needWorker: "No",
    workerCount: 0,
    workerType: "",
    startDate: "",
    endDate: "",
    durationHours: 0,
    landSize: "",
    workType: "",
    machineCost: 0,
    workerCost: 0,
    transportCost: 0,
    tax: 0,
    totalAmount: 0,
    paymentMethod: "UPI",
    payNow: false,
    paymentStatus: "Pending",
    bookingStatus: "Pending",
    contractorApproval: "Waiting",
  });

  useEffect(() => {
    const rate = parseFloat(booking.rate || 0);
    const hours = calcDuration(booking.startDate, booking.endDate);
    const machineCost = rate * hours;
    const workerCost = booking.workerCount * 100 * hours;
    const tax = 0.1 * (machineCost + workerCost);
    const total = machineCost + workerCost + booking.transportCost + tax;

    setBooking((prev) => ({
      ...prev,
      durationHours: hours,
      machineCost,
      workerCost,
      tax,
      totalAmount: total,
    }));
  }, [booking.startDate, booking.endDate, booking.rate, booking.workerCount, booking.transportCost]);

  const calcDuration = (start, end) => {
    const s = new Date(start);
    const e = new Date(end);
    const diff = (e - s) / 1000 / 60 / 60;
    return diff > 0 ? diff : 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setBooking({ ...booking, [name]: val });
  };

  return (
    <div className="booking-page">
      <h1>Booking</h1>

      {/* Farmer Details */}
      <section className="sec">
        <h2>Farmer Details</h2>
        <input className="int" name="farmerName" placeholder="Farmer Name" onChange={handleChange} />
        <input className="int" name="phone" placeholder="Phone Number" onChange={handleChange} />
        <input className="int" name="address" placeholder="Farm Address / Location" onChange={handleChange} />
        <input className="int" name="farmerId" placeholder="Farmer ID (optional)" onChange={handleChange} />
      </section>

      {/* Machine Selection */}
      <section className="sec">
        <h2>Machine Selection</h2>
        <select className="sel" name="machineType" onChange={handleChange}>
          <option value="">Select Machine</option>
          <option value="Tractor">Tractor</option>
          <option value="Harvester">Harvester</option>
          <option value="Seeder">Seeder</option>
        </select>
        <input className="int" name="machineModel" placeholder="Machine Model (optional)" onChange={handleChange} />
      </section>

      {/* Worker Requirement */}
      <section className="sec">
        <h2>Worker Requirement</h2>
        <select className="sel" name="needWorker" onChange={handleChange}>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
        {booking.needWorker === "Yes" && (
          <>
            <input className="int" name="workerCount" type="number" placeholder="No. of Workers" onChange={handleChange} />
            <select className="sel" name="workerType" onChange={handleChange}>
              <option value="">Select Worker Type</option>
              <option value="Skilled">Skilled</option>
              <option value="Unskilled">Unskilled</option>
            </select>
          </>
        )}
      </section>

      {/* Booking Time */}
      <section className="sec">
        <h2>Date & Duration</h2>
        <input className="int" type="datetime-local" name="startDate" onChange={handleChange} />
        <input className="int" type="datetime-local" name="endDate" onChange={handleChange} />
        <div>Total Hours: {booking.durationHours.toFixed(2)}</div>
      </section>

      {/* Land Info */}
      <section className="sec">
        <h2>Land Details (Optional)</h2>
        <input className="int" name="landSize" placeholder="Size (acres/hectares)" onChange={handleChange} />
        <input className="int" name="workType" placeholder="Type of Work (ploughing, etc.)" onChange={handleChange} />
      </section>

      {/* Payment Info */}
      <section className="sec">
        <h2>Payment</h2>
        <select className="sel" name="paymentMethod" onChange={handleChange}>
          <option value="UPI">UPI</option>
          <option value="Wallet">Wallet</option>
          <option value="Bank">Bank Transfer</option>
          <option value="Cash">Cash</option>
        </select>
      </section>

      {/* Booking Status */}
      <section className="sec">
        <div>You will receive confirmation via SMS / WhatsApp / Email</div>
      </section>

      <button className="submit-btn">Submit</button>
    </div>
  );
};

export default BookingPage;
