import React, { useEffect, useState } from "react";
import API from "../services/api";

interface Booking {
  _id: string;
  date: string;
  time: string;
  slot: string;
  status: string;
}

const BookingHistory: React.FC = () => {
  const [history, setHistory] = useState<Booking[]>([]);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const res = await API.get("/bookings/my");
        setHistory(res.data);
      } catch (err) {
        console.error("Error loading booking history:", err);
      }
    };

    loadHistory();
  }, []);

  if (history.length === 0) {
    return <p>No bookings found.</p>;
  }

  return (
    <div>
      <h2>Your Bookings</h2>

      {history.map((b) => (
        <div key={b._id} className="card">
          <p>
            <strong>Date:</strong> {b.date}
          </p>

          <p>
            <strong>Time:</strong> {b.time}
          </p>

          <p>
            <strong>Slot:</strong> {b.slot}
          </p>

          <p>
            <strong>Status:</strong> {b.status}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BookingHistory;

// Ensure file is treated as a module
export {};
