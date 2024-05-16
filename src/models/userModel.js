import { DataTypes } from "sequelize"
import sequelize from "../config/sequelize.js"

/**
 * @module models/userModel
 */

/**
 * User model
 * @typedef {Object} User
 * @property {number} id_user - User id
 * @property {string} user_name - User name
 * @property {string} user_password - User password
 * @property {string} user_city - User city
 * @property {string} user_rol - User role
 */
const userModel = sequelize.define("user", 
    {

        id_user:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },

        user_name:{
            type:DataTypes.STRING(45),
        },

        user_password:{
            type:DataTypes.STRING(100),
        },

        user_city:{
            type:DataTypes.STRING(45),
        },

        user_rol:{
            type:DataTypes.STRING(45)
        }

    })

export default userModel;