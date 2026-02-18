const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    date: String,
    time: String,
    slot: String,
    status: { type: String, default: "CONFIRMED" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", BookingSchema);
