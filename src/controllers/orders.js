// Imports JWT module
const jwt = require("jsonwebtoken");

// Imports model functions
const {

  search_product_price,
  make_order,
  update_order_status,
  delete_order,
  order_status,
  get_all_orders,
  get_user_orders

} = require("../models/orders");


// 1) MAKE ORDER (user)

module.exports.to_make_order = async (req, res) => {

  try {

    let { id_user, address, id_payment, products, time, date, description} = req.body;

    var total_order = 0;
    var flag = 0;
    
    while (flag !== products.length) {
      var wanted_product = products[flag];
      var wanted_product_id = wanted_product.id;
      var product_price = await search_product_price(wanted_product_id);
      var total = product_price[0].price * wanted_product.cant;
      total_order += total;
      flag++;
    }

    var id_order = await make_order(id_user, total_order, address, id_payment, products, time, date, description);

    res.status(201).json({ msg: "Order created successfully", id: id_order });

  } catch { res.status(500).json({ error: "Error" });}

}







// 2) CHECK ORDER STATUS (user)

module.exports.to_get_order_status = async (req, res) => {

  console.log(req.params);
  console.log(req.query);

  try {
    var id_order = req.query.id_order;
    var status = await order_status(id_order);
    res.status(200).json({ order_status: status });
  } catch {
    res.status(500).json({ error: "Error" });
  }
  console.log(id_order);

}







// 3) UPDATE ORDER STATUS (admin)

module.exports.to_update_order_status = async (req, res) => {

  try {
    if (req.user.role == 2) {
      let { id_status, id } = req.body;
      update_order_status(id_status, id);
      res.status(200).json({ msg: "Order status updated" });
    } else {
      res.status(401).json({ msg: "Unauthorized" });
    }
  
  } catch { res.status(500).json({ error: "Error" });}

}








// 4) DELETE ORDER (admin)

module.exports.to_delete_order = async (req, res) => {

  try {
    if (req.user.role == 2) {
      let id = req.query.id;
      delete_order(id);
      res.status(200).json({ msg: "Order deleted succesfully" });
    } else {
      res.status(401).json({ msg: "Unauthorized" });
    }
  
  } catch { res.status(500).json({ error: "Error" });}

}









// 5) GET ALL ORDERS (admin)

module.exports.to_get_all_orders = async (req, res) => {

  try {
    if (req.user.role == 2) {
      get_all_orders().then((orders_array) =>
        res.status(200).json({ orders_array: orders_array })
      );
    } else {
      res.status(401).json({ msg: "Unauthorized" });
    }
  
  } catch { res.status(500).json({ error: "Error" });}

}








// 6) GET USER'S ORDERS

module.exports.to_get_user_orders = async (req, res) => {

  console.log(req.params);
  console.log(req.query);

  try {
    var id_user = req.query.id_user;
    var user_orders_array = await get_user_orders(id_user);
    res.status(200).json({ user_orders_array: user_orders_array });
  
  } catch { res.status(500).json({ error: "Error" });}

  console.log(id_user);
  
}