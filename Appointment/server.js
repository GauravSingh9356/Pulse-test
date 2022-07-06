const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const appointmentRouter = require('./Routers/appointmentRouter');
const hospitalRouter = require('./Routers/hospitalRouter');

app.use(express.json()); //middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
const path = require('path');
app.use(cors({ origin: '*' }));

mongoose
  .connect(
    'mongodb+srv://naren123:naren123@cluster0.bisbj.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('DB connected...');
  })
  .catch((err) => console.log(err));

app.use('/api/appointments', appointmentRouter);
app.use('/api/hospitals', hospitalRouter);

app.listen(9000, () => {
  console.log('Server running');
});
