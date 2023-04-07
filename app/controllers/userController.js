const bcrypt = require('bcrypt')
const { v4: uuid } = require('uuid');

const database = require("../config/databaseConfig");
const connection = database.createConnection();


// GET ALL USERS DATA
async function getAllUsersData(callback){
    const statement = `SELECT * FROM User`;
    await database.executeQuery(connection, statement, (err, result)=>{
        return callback(err, result);
    });
}

// GET USER BY ID
async function getUserById(userId, callback){
    const statement = `SELECT * FROM User where Id = ${userId}`;
    await database.executeQuery(connection, statement, (err, result)=>{
        return callback(err, result[0]);
    });
}

// ADD NEW USER (SIGN UP)
async function addUser(user, callback){
    const id = uuid();
    const {fName, lName, empId, password} = user;
    const hashedPassword = await bcrypt.hash(password, 10);
    const statement = `INSERT INTO User (id, firstName, lastName, empId, password) values ('${id}', '${fName}', '${lName}', '${empId}', '${hashedPassword}')`;
    await database.executeQuery(connection, statement, (err, result)=>{
        return callback(err, result);
    });
}



module.exports = {
    getAllUsersData,
    getUserById,
    addUser
}