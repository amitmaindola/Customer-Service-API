const { v4: uuid } = require('uuid');
const database = require("../config/databaseConfig");
const connection = database.createConnection();


// GET ALL POSTS DATA
async function getAllPostsData(callback){
    const statement = `SELECT * FROM Post`;
    await database.executeQuery(connection, statement, (err, result)=>{
        return callback(err, result);
    });
}

// GET POST BY ID
async function getPostById(userId, callback){
    const statement = `SELECT * FROM Post where Id = ${userId}`;
    await database.executeQuery(connection, statement, (err, result)=>{
        return callback(err, result[0]);
    });
}

// ADD NEW POST
async function addPost(post, callback){
    const id = uuid();
    const {userId, title, description, imageURL} = post;
    const statement = `INSERT INTO Post (id, userId, title, description, imageURL) values ('${id}', '${userId}', '${title}', '${description}', '${imageURL}')`;
    await database.executeQuery(connection, statement, (err, result)=>{
        return callback(err, result);
    });
}

  

module.exports = {
    getAllPostsData,
    getPostById,
    addPost
}