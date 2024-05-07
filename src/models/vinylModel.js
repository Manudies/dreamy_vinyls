import connection from "../config/mysql.js";

async function findAll() {
    console.log("connection",connection)
    const queryString="SELECT * FROM vinyl";
    const [rows,fields] =await connection.query(queryString);
    console.log("find all");
    console.log("rows",rows);
    console.log("fields",fields);
    return rows;
}

async function findByPk(pk){
    const queryString="SELECT * FROM vinyl WHERE vinyl_id=?";
    const [rows,fields] = await connection.query(queryString,[pk]);
    console.log("find by pk");
    console.log("rows",rows);
    console.log("fields",fields);
    return rows[0];
}

async function create(data){

    const queryString = "INSERT INTO vinyl (album_name,artist_name,price,relase_date) VALUES (?,?,?,?)";
    const [rows,fields] = await connection.query(queryString,[data.album_name,data.artist_name,data.price,data.relase_date]);
    console.log("create");
    console.log("rows",rows);
    console.log("fields",fields);
    return rows;
}


async function update(pk,data){
    
    const queryString = "UPDATE vinyl SET album_name=?, artist_name=?, price=?, relase_data=? WHERE vinyl_id=?";
    const [rows,fields] = await connection.query(queryString,[data.album_name,data.artist_name,data.price,data.relase_date,pk]);
    console.log("update");
    console.log("rows",rows);
    console.log("fields",fields);
    return rows;
}

async function remove(pk){
    const queryString="DELETE FROM vinyl WHERE vinyl_id=?";
    const [rows,fields] = await connection.query(queryString,[pk]);
    console.log("delete");
    console.log("rows",rows);
    console.log("fields",fields);
    return rows;
}

export default {
    findAll,
    findByPk,
    create,
    update,
    remove

}


