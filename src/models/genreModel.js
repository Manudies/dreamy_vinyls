import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

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

export default genreModel;