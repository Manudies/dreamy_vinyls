import genreModel from "../../models/genreModel.js";

/**
 * @module controllers/genre/genreController
 */

/**
 * Retrieves all items.
 *
 * @return {Object} JSON response containing error and data
 */
async function getAll(){
    try {
        const genres = await genreModel.findAll()
        return{data:genres}
    } catch (error) {
        console.error(error);
        return { error: error };
    }
}

/**
 * Retrieves a specific item by ID.
 *
 * @param {type} id - The ID of the item to retrieve
 * @return {type} Object with error message if genre does not exist, otherwise the genre data
 */
async function getById(id){
    try {
        const genre = await genreModel.findByPk(id);
        if (!genre) {
            return {error: "El genero no existe"};
        }
        return {data:genre}
    } catch (error) {
        console.error(error);
        return { error };
    }
}

/**
 * Creates a new genre.
 *
 * @param {Object} genreData - The data of the new genre to be created
 * @return {Object} JSON response containing error or data of the created genre
 */
async function create(genreData){
    try {
        const newGenre = await genreModel.create(genreData);
        return  {data:newGenre}
    } catch (error) {
        console.error(error);
        return {error}
    }
}

/**
 * Updates a genre.
 *
 * @param {type} id - The ID of the genre to update
 * @param {type} genreData - The data to update the genre with
 * @return {type} JSON response containing error or data of the updated genre
 */
async function update(id,genreData){
    try {
        if(genreData.genre_name===""){
        delete genreData.genre_name;
        }
        const newGenre = await genreModel.update(genreData,
        {
            where:
            {
                id_genre:id
            } 
        }
    );
    return {data:newGenre}
    } catch (error) {
        console.error(error);
        return {error}  
    }
}

/**
 * Removes an item by ID.
 *
 * @param {type} id - The ID of the item to remove
 * @return {type} Object with data of the removed item or an error
 */
async function remove(id){
    try {
        const genre = await genreModel.findByPk(id);
        await genre.destroy();
        return {data:genre}
    } catch (error) {
        console.error(error);
        return{error}
    }
}

export {
    getAll,
    getById,
    create,
    update,
    remove
};

export default {
    getAll,
    getById,
    create,
    update,
    remove
};