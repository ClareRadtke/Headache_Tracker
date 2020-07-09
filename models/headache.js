const mongoose = require("mongoose");

const headacheSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  dateOf: {
    type: Date,
    default: Date.now,
  },
  timeOf: {
    type: String,
  },
  intensity: {
    type: Number,
    max: 10,
  },
  pain_type: [String],
  locations: {
    type: String,
    trim: true,
  },
  additional_pain: [String],
  menstruating: {
    type: Boolean,
  },
});

//export model
module.exports = mongoose.model("Headache", headacheSchema);
