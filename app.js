require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const auth = require('./server/routes/auth');
const notFound = require('./middleware/not-found');


// middleware
app.use(express.static('./public'));
app.use(express.json());

app.use('/main', auth);

app.use(notFound);


const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
