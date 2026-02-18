import React, { useEffect, useState } from "react";
import API from "../services/api";
import BookingForm from "./BookingForm";


interface Slot {
  slot: string;
  available: boolean;
}

const Dashboard: React.FC = () => {
  const [availability, setAvailability] = useState<Slot[]>([]);

  useEffect(() => {
    const loadSlots = async () => {
      try {
        const res = await API.get("/bookings/availability");
        setAvailability(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    loadSlots();
  }, []);

  return (
    <div>
      <h2>Parking Availability</h2>

      <BookingForm />

      <div className="grid">
        {availability.map((a) => (
          <div key={a.slot} className="slot">
            <strong>{a.slot}</strong>
            <p>{a.available ? "Available" : "Booked"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
