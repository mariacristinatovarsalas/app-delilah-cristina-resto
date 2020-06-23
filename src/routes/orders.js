const express = require('express')
const router = express.Router();
const { to_get_all_orders, to_make_order, to_update_order_status, to_delete_order, to_get_user_orders, to_get_order_status } = require('../controllers/orders')
const { user_authentication } =require ('../utils/authentication')

router.get("/get_all", user_authentication, async (req,res)=>await to_get_all_orders(req,res));
router.post("/make", user_authentication, async (req, res) => await to_make_order(req,res));
router.put("/update_status", user_authentication, async (req, res) => await to_update_order_status(req,res));
router.delete("/delete", user_authentication, async (req, res) => await to_delete_order(req,res));
router.get("/user", user_authentication, async (req, res) => await to_get_user_orders(req,res));
router.get("/status", user_authentication, async (req, res) => await to_get_order_status(req,res));

module.exports = router