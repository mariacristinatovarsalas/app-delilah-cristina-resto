const express = require('express')
const router = express.Router();
const { to_create_user, to_login_user, to_get_all_users }= require('../controllers/users')


router.post("/create", async (req,res)=>await to_create_user(req,res));
router.post("/login", async (req, res) => await to_login_user(req,res));
router.get("/get_all", async (req, res) => await to_get_all_users(req,res));


module.exports = router