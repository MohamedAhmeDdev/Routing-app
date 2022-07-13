import sequelize from "sequelize";


const db = new sequelize('routingApp', 'root', '',{
    host:"localhost",
    dialect: "mysql"
});

export default db;