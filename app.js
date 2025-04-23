const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const { routes: adminRoutes } = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();
app.set("view engine", "ejs"); // registering pug template engine
app.set("views", "views");  // route to the views (files with .ejs extension we use to render html)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use("/", (req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(4000);
