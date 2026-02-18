const express = require("express");
const Booking = require("../models/Booking");
const auth = require("../utils/auth");

const router = express.Router();

// Create booking
router.post("/", auth, async (req, res) => {
  try {
    const booking = await Booking.create({
      user: req.userId,
      ...req.body
    });

    res.json(booking);
  } catch (err) {
    res.status(500).json({ message: "Booking failed", error: err.message });
  }
});

// User booking history
router.get("/my", auth, async (req, res) => {
  const list = await Booking.find({ user: req.userId }).sort("-createdAt");
  res.json(list);
});

// Slot availability (dummy sample)
router.get("/availability", async (req, res) => {
  res.json([
    { slot: "A1", available: true },
    { slot: "A2", available: false },
    { slot: "B1", available: true }
  ]);
});

module.exports = router;
