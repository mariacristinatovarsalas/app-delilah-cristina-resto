const { sequelize } = require("../utils/sequelize");


// 1) MAKE ORDER (user)

module.exports.search_product_price = async (wanted_product_id) => {
  return await sequelize.query(
    'SELECT price FROM products WHERE id = "' + wanted_product_id + '"',
    { type: sequelize.QueryTypes.SELECT }
  );
};

module.exports.make_order = async (
  id_user,
  total_order,
  address,
  id_payment,
  products,
  time,
  date,
  description
) => {
  var order;
  await sequelize
    .query(
      "INSERT INTO orders (id_user, total, address, id_payment, id_status, time, date, description) VALUES  (?, ?, ?, ?, ?, ?, ?, ?)",
      {
        replacements: [
          id_user,
          total_order,
          address,
          id_payment,
          2,
          time,
          date,
          description,
        ],
      }
    )
    .then(function (results) {
      order = results[0];
    });
  await products.forEach(async (product) => {
    await sequelize.query(
      "INSERT INTO products_orders (id_product, id_order, cant) VALUES (?, ?, ?)",
      { replacements: [product.id, order, product.cant] }
    );
  });
  return order;
};







// 2) CHECK ORDER STATUS (user)

module.exports.order_status = async (id_order) => {
  var order_status = await sequelize.query(
    "SELECT orders.*,status.status, payment_methods.* FROM orders JOIN status ON orders.id_status = status.id_status JOIN payment_methods ON orders.id_payment = payment_methods.id WHERE orders.id =" +
      id_order
  );
  return order_status[0][0];
};








// 3) UPDATE ORDER STATUS (admin)

module.exports.update_order_status = (id_status, id) => {
  sequelize
    .query('UPDATE orders SET id_status = "' + id_status + '" WHERE id = ' + id)
    .then(function (results) {});
};





// 4) DELETE ORDER (admin)

module.exports.delete_order = (id) => {
  sequelize
    .query("DELETE FROM orders WHERE id = " + id)
    .then(function (results) {});
};






// 5) GET ALL ORDERS (admin)

module.exports.get_all_orders = async () => {

  // REAL

  var all_orders = await sequelize.query(
    "SELECT orders.*, status.status, payment_methods.payment_method, users.full_name FROM orders JOIN payment_methods ON payment_methods.id = orders.id_payment JOIN status ON status.id_status = orders.id_status JOIN users ON users.id = orders.id_user"
  );
  return all_orders[0];

  // MOCK

  // return get_all_orders_res


};






// 6) GET USER ORDERS

module.exports.get_user_orders = async (id_user) => {
  var user_orders = await sequelize.query(
    "SELECT orders.*, status.status, payment_methods.payment_method, users.full_name " +
      "FROM orders " +
      "JOIN payment_methods ON payment_methods.id = orders.id_payment " +
      "JOIN status ON status.id_status = orders.id_status " +
      "JOIN users ON users.id = orders.id_user " +
      "WHERE orders.id_user=" +
      id_user
  );
  console.log(user_orders);
  return user_orders;

}