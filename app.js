const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const { create } = require("express-handlebars");

const { routes: adminRoutes } = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// const handlebars = create({
//   defaultLayout: "main-layout",
//   layoutsDir: "views/layouts/",
//   extname: ".handlebars",
//   helpers: {
//     isEqual: (a, b) => a === b,
//   },
// })

const app = express();
// app.engine("handlebars", handlebars.engine); // registering handlebars template engine
// app.set("view engine", "handlebars"); // registering handlebars template engine
// app.set("view engine", "pug"); // registering pug template engine
app.set("view engine", "ejs"); // registering pug template engine
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use("/", (req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(4000);
