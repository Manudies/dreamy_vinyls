import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

import vinylModel from './vinylModel.js';
import userModel from './userModel.js';
import carritoViniloModel from './carritoViniloModel.js';

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
    }
)

/* 
cartModel.belongsToMany(vinylModel, {
    as: "vinilos", 
    through: "carrito_has_vinilos",
    foreignKey: "id_cart", 
    otherKey: "id_vinyl" ,
}); */

cartModel.hasMany(userModel, { //belongsTo
    as: "user", 
    foreignKey: 'id_user' 
});

cartModel.hasMany(carritoViniloModel,{
    as: "tablaIntermedia",

})

export default cartModel;