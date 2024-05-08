import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";



const cartModel = sequelize.define("cart",
    {
        cart_id:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        id_user: {
            type:DataTypes.STRING(45),
            allowNull:false
        },
        cart_closed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },

    }
)

vinylModel.belongsToMany(cartModel,
    {
        through:"cart_has_vinyl",
        as:"carts",
        foreignKey:"cart_id"
    }
);
cartModel.belongsToMany(vinylModel,
    {
        through:"cart_has_vinyl",
        as:"vinyls",
        foreignKey:"vinyl_id"
    }
);

export default cartModel;