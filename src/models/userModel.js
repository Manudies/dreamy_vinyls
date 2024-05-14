import { DataTypes } from "sequelize"
import sequelize from "../config/sequelize.js"

/* import cartModel from './cartModel.js';  */

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

    }
)

/* userModel.hasMany(cartModel, {
    as: "carrito", 
    foreignKey: "id_user" 
});
 */

export default userModel;