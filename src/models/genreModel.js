import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

import vinylModel from "./vinylModel.js";


const genreModel = sequelize.define("genre",
    {
        id_genre:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        genre_name: {
            type:DataTypes.STRING(45),
            allowNull:false
        }
    }
)

genreModel.hasMany(vinylModel, {
    as: "vinilos",
    foreignKey: "id_genre"
});

export default genreModel;