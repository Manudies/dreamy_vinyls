const genres = [
	{
		"id_genre" : 1,
		"genre_name" : "Rock",
	},
    {
		"id_genre" : 2,
		"genre_name" : "Punk",
	},
    {
		"id_genre" : 3,
		"genre_name" : "Pop",
	},

]
async function getAll(){
    return {data:genres}
}

async function getById(id){
    const genre = genres.find(genre => genre.id_genre === id);
    if(!genre){
        return {error:"El género no existe (lit)"};
    }
    return {data:genre};
}

async function create(genreData){
    const {genre_name} = genreData;
    // get max genre_id from genres
    if(!genre_name){
        return {error:"Los generos deben tener nombre!"};
    }
    const maxId = Math.max(...genres.map(genre => genre.id_genre));
    const newId= maxId + 1;
    const newGenre = {
        id_genre:newId,
        genre_name
        
    };
    console.log(newGenre);
    genres.push(newGenre);
    return {data:newGenre};
}

async function update(id,genreData){
    const {genre_name} =genreData;
    const genre = genres.find(genre=>genre.id_genre===id);
    if(!genre){
        return {error:"No se puede modificar un género que no existe, mazapan!"};
    }
    if(genre_name){
        genre.genre_name = genre_name;

    }
  

    return {data:genre};
}

async function remove(id){
    const genreIndex = genres.findIndex(genre=>genre.id_genre===id);
    if(genreIndex === -1){
        return {error:"no se pueden borrar género que no existen"}
    }
    const deletedGenre = genres.splice(genreIndex,1);
    return {data:deletedGenre};
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