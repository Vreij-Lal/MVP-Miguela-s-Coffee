const mongoose = require("./connection.js");

const UserSchema = new mongoose.Schema({
    username: String,
    password : String
});

const Users = mongoose.model("user", UserSchema);

module.exports = Users;