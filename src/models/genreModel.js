import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
/**
 * @module models/genreModel
 */

/**
 * Music genre
 * @typedef {Object} Genre
 * @property {number} id_genre - Id Genre
 * @property {string} genre_name - Genre name
 */
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