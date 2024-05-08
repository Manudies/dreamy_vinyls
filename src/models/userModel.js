import { DataTypes } from "sequelize"
import sequelize from "../config/sequelize.js"

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
            type:DataTypes.STRING(45),
        },
        user_city:{
            type:DataTypes.STRING(45),
        },
        user_rol:{
            type:DataTypes.STRING(45),
            allowNull:false
        }

    }
)

export default userModel;