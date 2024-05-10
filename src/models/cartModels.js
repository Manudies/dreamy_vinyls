import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

import bandModel from "./bandModel.js";

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
            defaultValue:true
        },
    }
)
cartModel.belongsTo(userModel,{foreignKey:"id_user"});
userModel.hasMany(cartModel,{as:"cancionescarritos",foreignKey:"id_user"});



export default cartModel;