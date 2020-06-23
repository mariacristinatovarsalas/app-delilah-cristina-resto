// TO CREATE SERVER

// Imports 'express' module
const express = require("express");
// Handles CORS
const cors = require("cors");
// Imports JWT module
const jwt = require("jsonwebtoken");
// Imports body-parser
const body_parser = require("body-parser");
require('dotenv').config()
const users_router = require("./routes/users")
const products_router = require("./routes/products")
const orders_router = require("./routes/orders")

const PORT = process.env.PORT || 3000
// 'express' module function that creates and 'express' server
const app = express();
// Handles CORS
app.use(cors());
//  Sends body requests from view to controller
app.use(body_parser.json());
// Makes the server 'listen' ('express' method) to the port 3000
app.listen(PORT, () => {
  console.log(  `Initiated server! in ${PORT}`);
});


// Show whatever folder you need (in this case 'public' folder)
app.use(express.static(__dirname + '/public')) // relative path of client-side code
app.get('/', function(req, res) {
    res.sendFile('index.html', { root: __dirname })
})

// Setting routers

app.use("/api/users", users_router)
app.use("/api/products", products_router)
app.use("/api/orders", orders_router)