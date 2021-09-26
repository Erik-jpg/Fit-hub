// This is a more robust way to make Schema extended models

// const mongoose = require('mongoose');
// const {Schema} = require('mongoose');


// const ExerciseSchema = new Schema({
//     type: String,
//     name: String,
//     duration: Number,
//     weight: Number,
//     reps: Number,
//     sets: Number,
//     distance: Number,
// });

// const WorkoutSchema = new Schema({
//     day: {type: Date, default: Date.now()},
//     exercises: 
//         {
//     type: [ExerciseSchema],
// },
// }); 
// const WorkoutSchema = new Schema({
//     day: Date,
//     exercises: [exerciseSchema],
// });

// const Workout = mongoose.model('Workout', WorkoutSchema);

// module.exports = Workout;