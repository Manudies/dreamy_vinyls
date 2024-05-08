const vinyls = [
	{
		"id_vinyl" : 1,
		"album_name" : "Nevermind",
		"artist_name" : "Nirvana",
		"price" : 3,
        "relase_date" : "03/12/1992"
	},
	{
		"id_vinyl" : 2,
		"album_name" : "Ensalada de coño",
		"artist_name" : "Tu madre es puta",
		"price" : 6,
        "relase_date" : "26/07/2001"
	},
	{
		"id_vinyl" : 3,
		"album_name" : "Matadero 5",
		"artist_name" : "Taburete",
		"price" : 57,
        "relase_date" : "11/05/2022"
	}
]
async function getAll(){
    return {data:vinyls}
}

async function getById(id){
    const vinyl = vinyls.find(vinyl => vinyl.id_vinyl === id);
    if(!vinyl){
        return {error:"El vinilo no existe"};
    }
    return {data:vinyl};
}

async function create(vinylData){
    const {album_name,artist_name,price,relase_date} = vinylData;
    // get max vinyl_id from vinyls
    if(!album_name ){
        return {error:"Los vinilos deben tener nombre!"};
    }
    const maxId = Math.max(...vinyls.map(vinyl => vinyl.id_vinyl));
    const newId= maxId + 1;
    const newVinyl = {
        id_vinyl:newId,
        album_name,
        artist_name,
        price,
        relase_date

    };
    vinyls.push(newVinyl);
    return {data:newVinyl};
}

async function update(id,VinylData){
    const {album_name,artist_name,price,relase_date} = VinylData;
    const vinyl = vinyls.find(vinyl=>vinyl.id_vinyl===id);
    if(!vinyl){
        return {error:"No se puede modificar un vinilo que no existe, bobolon"};
    }
    if(album_name){
        vinyl.album_name = album_name;
    }
    if(artist_name){
        vinyl.artist_name=artist_name;
    }
    if(price){
        vinyl.price = price;
    }
    if(relase_date){
        vinyl.relase_date = relase_date;
    }
    return {data:vinyl};
}

async function remove(id){
    const vinylIndex = vinyls.findIndex(vinyl=>vinyl.id_vinyl===id);
    if(vinylIndex === -1){
        return {error:"no se pueden borrar vinilos que no existen"}
    }
    const deletedVinyl = vinyls.splice(vinylIndex,1);
    return {data:deletedVinyl};
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