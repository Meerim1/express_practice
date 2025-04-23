const path = require("path");

const express = require("express");

const rootDir = require("../utils/path");
const { products } = require("./admin");

const router = express.Router();

router.get("/", (req, res) => {
  // console.log(products);
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  res.render("shop", {
    pageTitle: "Shop",
    prods: products,
    path: "/",
  });
});

module.exports = router;
