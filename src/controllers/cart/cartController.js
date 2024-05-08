const carts = [
	{
		"cart_id" : 1,
		"id_user" : 1,
		"cart_closed" : 1
	},
	{
		"cart_id" : 2,
		"id_user" : 2,
		"cart_closed" : 0
	},
	{
		"cart_id" : 3,
		"id_user" : 3,
		"cart_closed" : 0
	}
]
async function getAll(){
    return {data:carts}
}

async function getById(id){
    const cart = carts.find(cart => cart.cart_id === id);
    if(!cart){
        return {error:"El carta no existe"};
    }
    return {data:cart};
}

async function create(cartData){
    const {id_cart,cart_closed,id_user} = cartData;
    // get max cart_id from carts
    if(!id_user ){
        return {error:"Los carritos son para usuarios!"};
    }
    const maxId = Math.max(...carts.map(cart => cart.cart_id));
    const newId= maxId + 1;
    const newcart = {
        cart_id:newId,
        id_user,
        cart_closed

    };
    carts.push(newcart);
    return {data:newcart};
}

async function update(id,cartData){
    const {id_cart,cart_closed,id_user} = cartData;
    const cart = carts.find(cart=>cart.cart_id===id);
    if(!cart){
        return {error:"No se puede modificar un carta que no existe, mazapan!"};
    }
    if(id_user){
        cart.id_user = id_user;
    }
    
    if(cart_closed !== null && cart_closed!== undefined){
        cart.cart_closed=cart_closed
        console.log("cart_closer= "+cart.cart_closed)
    }
    return {data:cart};
}




async function remove(id){
    const cartIndex = carts.findIndex(cart=>cart.cart_id===id);
    if(cartIndex === -1){
        return {error:"no se pueden borrar cartas que no existen"}
    }
    const deletedcart = carts.splice(cartIndex,1);
    return {data:deletedcart};
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