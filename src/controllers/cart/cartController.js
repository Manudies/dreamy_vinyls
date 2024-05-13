import cartModel from "../../models/cartModel.js";

async function getAll(){
    try {
        const carts = await cartModel.findAll()
        return {data:carts}
    }
    catch (error) {
        console.error(error);
        return { error: error };
    }
}

async function getById(id){
    try {
        const user = await cartModel.findByPk(id);
        if (!user) {
            return { error: "El carrito no existe"};
        }
        return {data: user};
    } catch (error) {
        console.error(error);
        return {error};
    }
}

async function create(cartData){
    try {
        const newcart= await cartModel.create(cartData);
        // if(cartData.cart_closed == "on"){
        //     cartData.cart_closed = 
        // }
        return {data:newcart}
    } catch (error) {
        console.error(error);
        return {error}
    }   
}
async function update(id,cartData){
    try {
        if(cartData.cart_id==""){
            delete cartData.cart_id
        }
        const newCart = await cartModel.update(cartData, 
            {
            where:
            {
                id_cart:id
            }
        }
    );
        return{data:newCart};

    } catch (error) {
        console.error(error);
        return {error}  
    }

}

async function remove(id){
    try {
        console.log("El id del carrito a borrar es: ", id)
        const cart = await cartModel.findByPk(id);
        await cart.destroy();
        return {data:cart};
    } 
    catch (error) {
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