const { sequelize } = require("../utils/sequelize");

// 1) GET ALL PRODUCTS (user/admin)

module.exports.get_all_products = async () => {

  // REAL

  var all_products;
  await sequelize
    .query("SELECT * FROM products", { type: sequelize.QueryTypes.SELECT })
    .then(function (results) {
      all_products = results;
    });
  return all_products;

  // MOCK

  // return get_all_products_res

};







// 2) CREATE PRODUCT (admin)

module.exports.create_product = (name, price, url_img, code) => {
  sequelize
    .query(
      "INSERT INTO products (name, price, url_img, code) VALUES (?, ?, ?, ?)",
      { replacements: [name, price, url_img, code] }
    )
    .then(function (results) {});
};







// 3) UPDATE PRODUCT (admin)

module.exports.update_product = (id, new_name, new_price) => {
  sequelize
    .query(
      'UPDATE products SET name = "' +
        new_name +
        '", price = "' +
        new_price +
        '" WHERE id = ' +
        id,
      { replacements: [2] }
    )
    .then(function (results) {});
};







// 4) DELETE PRODUCT (admin)

module.exports.delete_product = (id) => {
  sequelize
    .query("DELETE FROM products WHERE id = " + id)
    .then(function (results) {});
};