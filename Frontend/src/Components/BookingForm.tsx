import React, { useState } from "react";
import API from "../services/api";

const BookingForm: React.FC = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [slot, setSlot] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await API.post("/bookings", { date, time, slot });
      alert("Booking created successfully!");
    } catch (err: any) {
      alert(err.response?.data?.message || "Booking failed");
    }
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h3>Book a Parking Slot</h3>

      <label>Date</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <label>Time</label>
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />

      <label>Slot</label>
      <select value={slot} onChange={(e) => setSlot(e.target.value)} required>
        <option value="">Select</option>
        <option value="A1">A1</option>
        <option value="A2">A2</option>
        <option value="B1">B1</option>
      </select>

      <button type="submit">Confirm Booking</button>
    </form>
  );
};

export default BookingForm;
