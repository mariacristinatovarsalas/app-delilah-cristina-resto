// Imports JWT module
const jwt = require("jsonwebtoken");


// Imports model functions
const {

  get_all_products,
  create_product,
  update_product,
  delete_product

} = require("../models/products");





// 1) GET ALL PRODUCTS (user/admin)

module.exports.to_get_all_products = async (req, res) => {

  try {
    get_all_products().then((products_array) =>
    res.status(200).json({ products_array: products_array }));
  } 
  catch { res.status(500).json({ error: "Error" });}

}






// 2) CREATE A PRODUCT (admin)

module.exports.to_create_product = async (req, res) => {

  console.log(req)
  try {
    
    if (req.user.role == 2) {
      let { name, price, url_img, code } = req.body;
      create_product(name, price, url_img, code);
      res.status(200).json({ msg: "Product created successfully" });
    } else { res.status(401).json({ msg: "Unauthorized" });}
  
  } catch { res.status(500).json({ error: "Error" });}

}





// 3) UPDATE PRODUCT (admin)

module.exports.to_update_product = async (req, res) => {

  try {

    if (req.user.role == 2) {
      let { id, new_name, new_price } = req.body;
      update_product(id, new_name, new_price);
      res.status(200).json({ msg: "Product updated successfully" });
    } else {
      res.status(401).json({ msg: "Unauthorized" });
    }
  
  } catch { res.status(500).json({ error: "Error" });}

}





// 9) DELETE PRODUCT (admin)

module.exports.to_delete_product = async (req, res) => {

  try {

    if (req.user.role == 2) {
      let id = req.query.id;
      delete_product(id);
      res.status(200).json({ msg: "Product deleted" });
    } else {
      res.status(401).json({ msg: "Unauthorized" });
    }
  
  } catch { res.status(500).json({ error: "Error" });}

}