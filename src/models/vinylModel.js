import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
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
            type:DataTypes.NUMBER
        },
        relase_date:{
            type:DataTypes.INTEGER.UNSIGNED
        }
    }
)



vinylModel.belongsTo(genreModel, {
    as: "genero", 
    foreignKey: "id_genre" 
});

/* genreModel.belongsToMany(vinylModel, {
    as: "carritos", 
    through: "carrito_has_vinilos", 
    foreignKey: "id_vinyl" 
}); */

export default vinylModel;