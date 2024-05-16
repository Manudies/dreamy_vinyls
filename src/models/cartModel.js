import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

import vinylModel from './vinylModel.js';
import userModel from './userModel.js';

/**
 * @module models/cartModel
 */

/**
 * Cart model
 * @typedef {Object} Cart
 * @property {number} id_cart - Cart id
 * @property {number} id_user - User id
 * @property {boolean} cart_closed - If the cart is closed
 */
const cartModel = sequelize.define("cart",
    {
        id_cart:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        id_user: {
            type:DataTypes.INTEGER.UNSIGNED,
            allowNull:false
        },

        cart_closed: {
            type:DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue:false
        },
    })


cartModel.belongsToMany(vinylModel, {
    as: "vinilos", 
    through: "cart_has_vinyls",
    foreignKey: "id_cart", 
    otherKey: "id_vinyl" ,
});

cartModel.belongsTo(userModel, { 
    as: "user", 
    foreignKey: 'id_user' 
});

userModel.hasMany(cartModel, { 
    as: "carritos", 
    foreignKey: 'id_user' 
});


export default cartModel;