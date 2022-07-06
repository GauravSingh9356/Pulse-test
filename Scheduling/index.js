const express = require('express');
const routes = require('./Routes/scheduleRoutes');

const app = express();

// CONNECT TO DB

//routes

app.use(routes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});
