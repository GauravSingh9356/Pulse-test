const mongoose = require('mongoose');

const scheduleSchema = mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'user',
    required: ['true', 'A Schedule must have registered for user'],
  },

  doctor: {
    type: mongoose.Types.ObjectId,
    ref: 'doctor',
    required: ['true', 'A Schedule must have doctor assigned'],
  },

  hospital: {
    type: mongoose.Types.ObjectId,
    ref: 'hospital',
    required: ['true', 'A Schedule must have hospital!'],
  },

  schedule: [
    {
      type: Date,
      required: ['true', 'A Schedule must have starting time!'],
    },
    {
      type: Date,
      required: ['true', 'A Schedule must have ending time!'],
    },
  ],
  isDone: {
    type: Boolean,
    default: false,
  },
});

module.exports = new mongoose.model('Schedule', scheduleSchema);
