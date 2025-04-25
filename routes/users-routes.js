const express = require("express");

const router = express.Router();

const users = [];

router.get("/users", (req, res, next) => {
  res.render("users", {
    pageTitle: "Users",
    users: users,
  });
});

router.post("/users", (req, res, next) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
  };
  users.push(user);
  console.log(user, users);
  res.redirect("/");
});

module.exports = router;
