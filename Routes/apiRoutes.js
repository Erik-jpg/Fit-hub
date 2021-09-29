const express = require("express");
const router = require("express").Router();
const { Workout } = require("../models");
const path = require("path");

router.use(express.static(path.join(__dirname, "public")));

router.get("/api/Exercises", async (req, res) => {
  const allWorkouts = await Workout.aggregate([
    { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
  ]);
  res.status(200).json(allWorkouts);
});

router.post("/api/Exercises", async (req, res) => {
  const createdWorkout = await Workout.create({ day: Date.now(), ...req.body });
  res.status(201).json(createdWorkout);
});

router.put("/api/Exercises/:id", async (req, res) => {
  const addedToWorkout = await Workout.findByIdAndUpdate(
      req.params.id,
    {
      $push: {
        exercises: req.body,
      },
    }
  );

  res.status(200).json(addedToWorkout);
});

router.get("/api/Exercises/range", async (req, res) => {
  const weekAgoDate = await new Date();
  weekAgoDate.setDate(weekAgoDate.getDate() - 7);
  const pastWorkouts = await Workout.aggregate([
    {
      $match: {
        day: {
          $gt: weekAgoDate,
        },
      },
    },
    {
      $set: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ]);
  res.json(pastWorkouts);
});
//look sort and limit methods to add to aggregate. 

//add delete route

module.exports = router;
