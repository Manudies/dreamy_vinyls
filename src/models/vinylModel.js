import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

/* import cartModel from "./cartModel.js"; */
 import genreModel from './genreModel.js';

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



vinylModel.hasMany(genreModel, {
    as: "genero", 
    foreignKey: "id_genre" 
});

/* vinylModel.belongsToMany(cartModel, { //prueba para poner los vinilos en el carrito
    as: "carritos", 
    through: "carrito_has_vinilos", 
    foreignKey: "id_vinyl" 
}); */

export default vinylModel;