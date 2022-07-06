const Hospital = require('../Models/Hospital');

const registerHospital = async (req, res) => {
  try {
    const doctors = req.body.doctors;

    const hospital = await Hospital.create({
      name: req.body.name,
      address: req.body.address,
      doctors: doctors,
    });

    return res.send(hospital);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const findHospital = async (req, res) => {
  try {
    const { id } = req.params;
    const hospital = await Hospital.findById(id).populate('doctors.doctor');

    return res.send(hospital);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const findAllHospitals = async (req, res) => {
  try {
    const hospitals = await Hospital.find().populate('doctors.doctor');

    return res.send(hospitals);
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = {
  registerHospital,
  findHospital,
  findAllHospitals,
};
