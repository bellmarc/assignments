const express = require("express");
const userRouter = express.Router();
const User = require("../models/user.js");

//getAll Professionals
userRouter.get("/", (req, res, next) => {
  User.find({ userType: "professional" }, (err, users) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    const locations = users.map(user => user.location)
    return res.status(200).send(locations);

  });
});

//getAllCustomers
userRouter.get("/customer", (req, res, next) => {
  User.find({ userType: "customer" }, (err, users) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(users);
  });
});


module.exports = userRouter;
