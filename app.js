const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/users-routes");
const mainRoutes = require("./routes/main-routes");

const app = express();

app.set("view engine", "pug");
app.set("views", "views"); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));


app.use(mainRoutes);
app.use(userRoutes);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
