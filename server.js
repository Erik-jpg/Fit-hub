const express = require('express');
const { Workout, mongoose} = require('./schema/Workout');
const app = express();
const path = require('path');

app.use(express.json());

app.get('/', function(req, res) => res.sendFile(path.join(_dirname, '/index.html')));

app.get('/exercises', function(req, res) => res.sendFile(path.join(_dirname, '/exercises.html')));

app.get('/stats', function(req, res) => res.sendFile(path.join(_dirname, '/stats.html')));

app.get('/api/workouts', async (req, res) => {
    const allWorkouts = await Workout.find();
    res.json(allWorkouts);
});

app.post('/api/workouts', async (req, res) => {
    const createdWorkout = await Workout.create(req.body);
    res.json(createdWorkout);
})

app.put('api/Workouts/:id', async (req, res) => {
    Workout.updateOne({_id: req.params.id}, {$push: { exercises: req.body} });
    res.status(200).end();
});

app.get('/api/workout/range', async (req, res) => {
    const weekAgoDate= await new Date() -7
    const pastWorkouts = await workout.aggregate([
        {$match: {day: {$gt: weekAgo.setDate(weekAgo.getDate()-7) } } }, 
        {
            $addFields: {totalDuration: {$sum: '$exercises.duration'}
        },
    ]);
    res.json(pastWorkouts);
});

mongoose.on('connection', () =>{
    console.log('connected to mongo');
});