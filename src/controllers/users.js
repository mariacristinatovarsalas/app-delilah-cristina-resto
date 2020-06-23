// Imports JWT module
const jwt = require("jsonwebtoken");
// Imports funciones del modelo
const {
  search_username_existence,
  search_email_existence,
  search_user_match,
  create_user,
  get_all_users
} = require("../models/users");

/* USER ACTIONS  */

// 1) CREATE USER (user/admin)

module.exports.to_create_user = async (req, res) => {
  try {
    const {
      username,
      full_name,
      email,
      phone_number,
      address,
      password,
    } = req.body;
    var username_existence = await search_username_existence(username);

    if (username_existence.length == 0) {
      var email_existence = await search_email_existence(email);
      if (email_existence.length == 0) {
        const user_creation = await create_user(
          username,
          full_name,
          email,
          phone_number,
          address,
          password
        );
        res.status(200).json({ msg: "User created successfully" });
      } else {
        res.status(403).json({ msg: "Email already exists" });
      }
    } else {
      res.status(403).json({ msg: "Username already exists" });
    }
  } catch (err) {
    res.status(500).json({ error: "Error" });
  }
};






// 2) USER LOGIN (user/admin)

module.exports.to_login_user = async (req, res) => {
  try {
    const { user, password } = req.body;
    let db_query = await search_user_match(user);
    console.log(db_query);
    let db_result = db_query[0];

    if (db_result) {
      if (db_result.password == password) {
        const user_all = {
          user: db_result.id,
          username: db_result.username,
          fullname: db_result.full_name,
          email: db_result.email,
          phone_number: db_result.phone_number,
          address: db_result.address,
          role: db_result.cod_role,
        };

        const token = jwt.sign(user_all, "clavesecreta");
        res.status(200).send(JSON.stringify({ token: token, user: user_all }));
      } else {
        res.status(403).send({ msg: "Wrong password" });
      }
    } else {
      res.status(403).send({ msg: "Wrong user" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error" });
  }
};




// 3) GET ALL USERS (admin)

module.exports.to_get_all_users = async (req, res) => {

  try {
    //if (req.user.role == 2) {
      get_all_users().then((users_array) =>
        res.status(200).json({ users_array: users_array })
      );
    //} else {
      //res.status(401).json({ msg: "Unauthorized" });
    //}
  
  } catch { res.status(500).json({ error: "Error" });}

};