//Connection to database

//connecting to mongodb via mongoose
const mongoose = require('mongoose');

const dotenv = require("dotenv")
dotenv.config();

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb+srv://vreijlal:123571833@cluster0.k6snds9.mongodb.net/?retryWrites=true&w=majority")
}

module.exports = mongoose;