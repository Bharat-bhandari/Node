const express = require("express");
const router = express.Router();

const user = [];

router.get("/users", (req, res, next) => {
  res.render("users", { pageTitle: "User", user: user });
});

router.post("/add-user", (req, res, next) => {
  user.push({ name: req.body.name });
  console.log(user);
  res.redirect("/users");
});

module.exports = router;
