import vinylModel from "../../models/vinylModel.js";

async function getAll() {
    try {
        const vinyls = await vinylModel.findAll({include:["vinyls"]});
        return { data: vinyls };
    }
    catch (error) {
        console.error(error);
        return { error: error };
    }
}

async function getById(id) {
    try {
        const vinyl = await vinylModel.findByPk(id);
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
        if(vinylData.name === ""){
            delete vinylData.name;
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
        const result = await vinylModel.remove(id);
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