// Imports sequelize package
const Sequelize = require("sequelize");
// Creates database route
//const sequelize = new Sequelize('mysql://root@127.0.0.1:3306/delilah_resto');

const conf_db_host = process.env.CONF_DB_HOST
const conf_db_name = process.env.CONF_DB_NAME
const conf_db_user = process.env.CONF_DB_USER
const conf_db_password = process.env.CONF_DB_PASSWORD
const conf_db_port= process.env.CONF_DB_PORT

module.exports.sequelize = new Sequelize(
    `mysql:${conf_db_user}:${conf_db_password}@${conf_db_host}:${conf_db_port}/${conf_db_name}`
);