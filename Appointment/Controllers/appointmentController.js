const Appointment = require('../Models/Appointments');

const registerAppointment = async (req, res) => {
  try {
    const { userId } = req.user;
    const appointment = await Appointment.create({
      user: userId,
      hospital: req.body.hospital,
      doctor: req.body.doctor,
    });

    return res.send(appointment);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const findAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await Appointment.find({ user: id }).populate(
      'user hospital doctor'
    );

    return res.send(appointment);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const findAllAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const appointments = await Appointment.find().populate(
      'user hospital doctor'
    );

    return res.send(appointments);
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = {
  registerAppointment,
  findAppointment,
  findAllAppointment,
};
