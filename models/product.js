const path = require("path");
const fs = require("fs");

const rootDir = require("../utils/path");

const pathToFile = path.join(rootDir, "data", "products.json");

const getProductsFromFile = (cb) => {
  fs.readFile(pathToFile, (error, fileContent) => {
    if (error) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(pathToFile, JSON.stringify(products), (error) => {
        console.log(error);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
