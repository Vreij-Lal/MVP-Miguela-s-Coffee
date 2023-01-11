const mongoose = require("./connection.js");

const UserSchema = new mongoose.Schema({
    userName: String,
    password : String
});

const Users = mongoose.model("users", UserSchema);

module.exports = Users;