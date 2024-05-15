import vinylModel from "../../models/vinylModel.js";
import cartModel from "../../models/cartModel.js";

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
        const result = await vinylModel.findByPk(id);
        await result.destroy();
        return {data:result};
    } catch (error) {
        console.error(error);
    }
    
}
//funcion para guardar en carrito
async function addToCart(req, res) {
    const userId = req.user.id_user; // Suponiendo que tienes información del usuario en req.user
    const vinylId = req.body.id_vinyl;

    try {
        // Verificar si el usuario tiene un carrito existente
        let cart = await cart.findOne({ where: { userId } });

        // Si no hay carrito, crea uno
        if (!cart) {
            cart = await cart.create({ userId });
        }

        // Agregar el vinilo al carrito (asumiendo una relación de muchos a muchos)
        await cart.addVinyl(vinylId);

        res.status(200).json({ message: 'Vinyl added to cart successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error adding vinyl to cart' });
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