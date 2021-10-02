
const router = require("express").Router();
const { Workout } = require("../models/index");



router.get("/Exercises", async (req, res) => {
  const allWorkouts = await Workout.aggregate([
    { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
  ]);
  res.status(200).json(allWorkouts);
});

router.post("/Exercises", async (req, res) => {
  try {
    const createdWorkout = await Workout.create({
      day: Date.now(),
      ...req.body,
    });
    res.status(201).json(createdWorkout);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/Exercises/:id", async (req, res) => {
  const addedToWorkout = await Workout.findByIdAndUpdate(req.params.id, {
    $push: {
      exercises: req.body,
    },
  });

  res.status(200).json(addedToWorkout);
});

router.get("/Exercises/range", async (req, res) => {
  const weekAgoDate = await new Date();
  weekAgoDate.setDate(weekAgoDate.getDate() - 7);
  const pastWorkouts = await Workout.aggregate([
    {
      $match: {
        day: {
          $gt: weekAgoDate } } },
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration" } } }
  ]);
  res.json(pastWorkouts);
});
//look sort and limit methods to add to aggregate.

module.exports = router;
