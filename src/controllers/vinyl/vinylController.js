import vinylModel from "../../models/vinylModel.js";
import cartModel from "../../models/cartModel.js";

async function getAll() {
    try {
        const vinyls = await vinylModel.findAll({include:["genero"]});
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
//funcion para guardar en carrito
async function addToCart(userId,vinylId) {

    try {
        // Verificar si el usuario tiene un carrito existente
        let cart = await cartModel.findOne({ where: { id_user: userId } });
        console.log("hay un carrito",cart)
        // Si no hay carrito, crea uno
        if (!cart) {
            console.log("no hay carrito")
            cart = await cartModel.create({ id_user: userId });
        }

        // Agregar el vinilo al carrito (asumiendo una relación de muchos a muchos)
        await cart.addVinilo(vinylId);
        console.log("añadiendo vinilo",cart)
        return {data:cart}
    } catch (error) {
        console.error(error)
        return {error}
    }
}

export {
    getAll,
    getById,
    create,
    update,
    remove,
    addToCart
};

export default {
    getAll,
    getById,
    create,
    update,
    remove,
    addToCart
};