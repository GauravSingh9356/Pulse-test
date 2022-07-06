const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
    },
    doctors: [
      {
        doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },

        timimg: Date,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Hospital', hospitalSchema);
