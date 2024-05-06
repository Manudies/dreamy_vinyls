const vinyls = [
	{
		"vinyl_id" : 1,
		"album_name" : "Nevermind",
		"artist_name" : "Nirvana",
		"price" : 3,
        "relase_date" : "03/12/1992"
	},
	{
		"vinyl_id" : 1,
		"album_name" : "Nevermind",
		"artist_name" : "Nirvana",
		"price" : 3,
        "relase_date" : "03/12/1992"
	},
	{
		"vinyl_id" : 1,
		"album_name" : "Nevermind",
		"artist_name" : "Nirvana",
		"price" : 3,
        "relase_date" : "03/12/1992"
	}
]
async function getAll(){
    return {data:vinyls}
}

async function getById(id){
    const vinyl = vinyls.find(vinyl => vinyl.vinyl_id === id);
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
    const maxId = Math.max(...vinyls.map(vinyl => vinyl.vinyl_id));
    const newId= maxId + 1;
    const newVinyl = {
        vinyl_id:newId,
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
    const vinyl = vinyls.find(vinyl=>vinyl.vinyl_id===id);
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
    const vinylIndex = vinyls.findIndex(vinyl=>vinyl.vinyl_id===id);
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