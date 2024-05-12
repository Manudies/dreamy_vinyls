import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

// import bandModel from "./bandModel.js";

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

// artistModel.belongsToMany(bandModel,
//     {
//         through:"band_has_artist",
//         as:"bandas",
//         foreignKey:"band_id"
//     }
// );
// bandModel.belongsToMany(artistModel,
//     {
//         through:"band_has_artist",
//         as:"artistas",
//         foreignKey:"artist_id"
//     }
// );

export default genreModel;