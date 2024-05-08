import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";



const vinylModel = sequelize.define("vinyl",
    {
        id_vinyl:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        album_name: {
            type:DataTypes.STRING(45),
            allowNull:false
        },
        artist_name: {
            type:DataTypes.STRING(45),
            allowNull:false
        },
        price:{
            type:DataTypes.DATE
        },
        relase_date:{
            type:DataTypes.INTEGER.UNSIGNED
        }
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

export default vinylModel;