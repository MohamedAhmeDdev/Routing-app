import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const users = db.define('users',{
    userName:{
        type: DataTypes.STRING
    },
    userEmail:{
        type: DataTypes.STRING
    },
    password:{
        type:DataTypes.INTEGER
    }
},{
    freezeTableName: true
});
 
export default users;
