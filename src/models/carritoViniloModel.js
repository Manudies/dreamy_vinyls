import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

import vinylModel from './vinylModel.js';
import userModel from './userModel.js';
import cartModel from "./cartModel.js";


const carritoViniloModel = sequelize.define("cart",
    {
        id_cart:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        id_vinyl:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },

    }
)


/* cartModel.belongsToMany(vinylModel, {
    as: "vinilos", 
    through: "carrito_has_vinilos",
    foreignKey: "id_cart", 
    otherKey: "id_vinyl" ,
});

cartModel.hasMany(userModel, { //belongsTo
    as: "user", 
    foreignKey: 'id_user' 
});
 */
carritoViniloModel.belongsTo(cartModel,{
    as: "tablaIntermedia",
    foreignKey:'id_vinyl',
    otherKey: 'id_cart'
    

})

carritoViniloModel.belongsTo(vinylModel,{
    as: "tablaIntermedia2",
    foreignKey:'id_vinyl',
    otherKey: 'id_cart'

})

export default cartModel;