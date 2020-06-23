const { sequelize } = require("../utils/sequelize");

/* USER ACTIONS */

// 1) CREATE USER (user/admin)

module.exports.search_username_existence = async (username) => {
  
  // REAL

  var existence_username;
  await sequelize
    .query('SELECT * FROM users WHERE username = "' + username + '"', {
      type: sequelize.QueryTypes.SELECT,
    })
    .then(function (results) {
      existence_username = results;
    });
  return existence_username;

  // MOCK

};

module.exports.search_email_existence = async (email) => {
  var existence_email;
  await sequelize
    .query('SELECT * FROM users WHERE email = "' + email + '"', {
      type: sequelize.QueryTypes.SELECT,
    })
    .then(function (results) {
      existence_email = results;
    });
  console.log(existence_email);
  return existence_email;
};

module.exports.create_user = async (
  username,
  full_name,
  email,
  phone_number,
  address,
  password
) => {
  var created_user_id;
  await sequelize
    .query(
      'INSERT INTO users (username, full_name, email, phone_number, address, password, cod_role) VALUES ("' +
        username +
        '","' +
        full_name +
        '","' +
        email +
        '","' +
        phone_number +
        '","' +
        address +
        '","' +
        password +
        '", 1)'
    )
    .then(function (results) {
      created_user_id = results[0];
    });
  var users_roles_join = await sequelize.query(
    "SELECT users.*, roles.role FROM users JOIN roles ON users.cod_role = roles.cod_role WHERE users.id = " +
      created_user_id
  );
  return users_roles_join;
};






// 2) USER LOGIN (user/admin)

module.exports.search_user_match = async (user) => {

  console.log(sequelize)

  // REAL
  return await sequelize.query(
    `SELECT * FROM users WHERE username = "${user}"  OR email = "${user}"`, { type: sequelize.QueryTypes.SELECT }
  );

  // MOCK

  // if(user === "britney_spears") {
  //   return login_res
  // } else {
  //   return login_res_admin
  // }
};






// 3) GET ALL USERS (admin)

module.exports.get_all_users = async () => {

  // REAL

  var all_users;
  await sequelize
    .query("SELECT * FROM users", { type: sequelize.QueryTypes.SELECT })
    .then(function (results) {
      all_users = results;
    });
  return all_users;

  // MOCK

  // return get_all_users_res
};