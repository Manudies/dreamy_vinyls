import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
 import genreModel from './genreModel.js';

 /**
 * @module models/vinylModel
 */

/**
 * Vinyl model
 * @typedef {Object} Vinyl
 * @property {number} id_vinyl - Vinyl id
 * @property {string} album_name - Album name
 * @property {string} artist_name - Artist name
 * @property {number} price - Price
 * @property {number} relase_date - Release date
 */
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

export default vinylModel;