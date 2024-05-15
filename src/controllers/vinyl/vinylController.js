import vinylModel from "../../models/vinylModel.js";

async function getAll() {
    try {
        const vinyls = await vinylModel.findAll({include:["genero"]});
        console.log ("vinilos",vinyls);
        return { data: vinyls };
    }
    catch (error) {
        console.error(error);
        return { error: error };
    }
}

async function getById(id) {
    try {
        const vinyl = await vinylModel.findByPk(id,{include:["genero"]});
        console.log("vinilo",vinyl);
        if (!vinyl) {
            return { error: "El vinilo no existe" };
        }
        return { data: vinyl };
    }
    catch (error) {
        console.error(error);
        return { error };
    }
}

async function create(vinylData) {
    try {
        const newVinyl = await vinylModel.create(vinylData);
        console.log("new vinyl",newVinyl);
        return {data:newVinyl};
    } catch (error) {
        console.error(error);
        return {error}
    }
}

async function update(id, vinylData) {
    try {
        if(vinylData.album_name === ""){
            delete vinylData.album_name;
        }
        const newVinyl = await vinylModel.update(vinylData,
            {
                where: 
                {
                    id_vinyl:id
                }
            }
        );
        return {data:newVinyl};
    } catch (error) {
        console.error(error);
        return {error}
    }
}

async function remove(id) {
    try {
        const result = await vinylModel.findByPk(id);
        await result.destroy();
        return {data:result};
    } catch (error) {
        console.error(error);
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