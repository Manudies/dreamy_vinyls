import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";


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

export default cartModel;