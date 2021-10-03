const mongoose = require('mongoose');
const express = require('express');
// const Workout = require('./models/Exercises');
const app = express();
const path = require('path');
const morgan = require('morgan');
require('dotenv').config();
const routes = require('./routes');

const PORT = process.env.PORT || 8080;

app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use("/", routes);



mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).catch((err) => {
    console.log("Error coming from mongoose: ", err)
});

app.listen(PORT,  console.log(`connected to http://localhost:${PORT}`));
