const express = require('express');
require('dotenv').config({ path: '../.env' });

const connectToMongo = require('./config/db');
var cors = require('cors')

connectToMongo();

const app = express();
const port = 5000;

app.use(cors())
app.use(express.json());

app.use('/api/auth',require("./routes/auth"));
app.use('/api/notes',require("./routes/notes"));

app.listen(port, () => {
  console.log(`Listify backend listening at http://localhost:${port}`);
})
