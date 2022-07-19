import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const login = db.define('login',{
    userEmail:{
        type: DataTypes.STRING
    },
    password:{
        type:DataTypes.INTEGER
    }
},{
    freezeTableName: true
});
 
export default login;
