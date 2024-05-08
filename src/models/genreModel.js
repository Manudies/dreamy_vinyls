import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";



const genreModel = sequelize.define("genre",
    {
        genre_id:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        genre_name: {
            type:DataTypes.STRING(45),
            allowNull:false
        },
    }
)

vinylsModel.belongsTo(genreModel,
    {
        /* through:"cart_has_genre", */
        as:"genre",
        foreignKey:"id_genre"
    }
);
genreModel.hasMany(vinylsModel,
    {
        /* through:"cart_has_genre", */
        as:"vinyls",
        foreignKey:"id_genre"
    }

);

export default genreModel;