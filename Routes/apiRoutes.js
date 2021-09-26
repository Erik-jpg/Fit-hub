const express = require('express');
const router = express.router();
const mongoose = require('mongoose');
const app = express();

app.get('/', (req, res) => 
res.sendFile(path.join(_dirname, 'public', '/index.html')));

app.get('/exercises', (req, res) => 
res.sendFile(path.join(_dirname, 'public', '/index.html')));

app.get('/stats', (req, res) => 
res.sendFile(path.join(_dirname, 'public', '/index.html')));

app.get('/api/workouts', async (req, res) => {
    const allWorkouts = await workout.find().sort({ day:1});
    res.json(allWorkouts);
})

app.post('/api/workouts', async (req, res)=>{
    const createdWorkout.create(req.body);
})

app.put('/api/workout/:id', async (req, res) => {
    const updateWorkout = await Workout.updateOne({_id: req.params.id}, {$push: {exercises: req.body} })
    res.send(200).end();
})

app.get('api/')