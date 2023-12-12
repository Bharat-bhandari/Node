const fs = require("fs");
const path = require("path");

module.exports = class Product {
  constructor(t) {
    this.title = t;
    console.log("t = ", t);
  }

  save() {
    // products.push(this);

    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );

    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
    // console.log("this = ", this);
    // console.log("products = ", products);
  }

  static fetchAll(cb) {
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );
    // console.log(products);
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent));
    });
  }
};
