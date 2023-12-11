const express = require("express");

const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", "views");

const homeRoutes = require("./routes/home");
const userRoutes = require("./routes/user");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(userRoutes);
app.use(homeRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);
