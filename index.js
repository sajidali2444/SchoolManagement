const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// setup the server port
const port = process.env.PORT || 6000;

// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse request data content type application/json
app.use(bodyParser.json());

// define root route
app.get('/', (req, res) => {
  res.send('Hello World');
});
// import employee routes
const studentsRoutes = require('./src/routes/students.routes');

// create employee routes
app.use('/api/v1/student', studentsRoutes);

// listen to the port
app.listen(port, () => {
  console.log(`Express is running at port ${port}`);
});
