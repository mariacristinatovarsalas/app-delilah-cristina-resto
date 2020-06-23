const express = require('express')
const router = express.Router();
const { to_get_all_products, to_create_product, to_update_product, to_delete_product } = require('../controllers/products')
const {user_authentication} =require('../utils/authentication')

router.get("/get_all", user_authentication, async (req,res)=>await to_get_all_products(req,res));
router.post("/create", user_authentication, async (req, res) => await to_create_product(req,res));
router.put("/update", user_authentication, async (req, res) => await to_update_product(req,res));
router.delete("/delete", user_authentication, async (req, res) => await to_delete_product(req,res));

module.exports = router