import genreModel from "../../models/genreModel.js";

async function getAll(){
    try {
        const genres = await genreModel.findAll({include:["vinilos"]})
        return{data:genres}
    } catch (error) {
        console.error(error);
        return { error: error };
    }
}

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

async function create(genreData){
    try {
        const newGenre = await genreModel.create(genreData);
        return  {data:newGenre}
    } catch (error) {
        console.error(error);
        return {error}
    }
}

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