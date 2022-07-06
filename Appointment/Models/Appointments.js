const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    hospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hospital',
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor',
    },

    conservations: [
      {
        user: mongoose.Schema.Types.ObjectId,
        doctor: mongoose.Schema.Types.ObjectId,
        text: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Appointment', appointmentSchema);
