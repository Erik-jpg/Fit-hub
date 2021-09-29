const mongoose = require('mongoose');
const express = require('express');
const Workout = require('./models/Workout');
const app = express();
const path = require('path');
const morgan = require('morgan');

const PORT = process.env.PORT || 8080;

app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


mongoose.connect('mongodb+srv://Person-shared-with:share_with_someone42@cluster0.6o6fe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
// ('mongodb://localhost/workout');
// needs to be formatted for Heroku

app.use(require('./Routes/apiRoutes'))
app.use(require('./Routes/htmlRoutes'))


app.listen(PORT,  console.log('connected to mongo'));
