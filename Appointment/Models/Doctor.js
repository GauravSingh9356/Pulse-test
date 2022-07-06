const mongoose = require('mongoose');

const doctor = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
    },

    department: {
      type: String,
    },
    recording: 
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Doctor', doctor);
