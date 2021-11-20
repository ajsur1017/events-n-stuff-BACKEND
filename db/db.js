require("dotenv").config()
const mongoose = require("mongoose")
const config = {useUnifiedTopology: true, useNewUrlParser: true}
const {MONGODB_URL} = process.env

//Create Connection
mongoose.connect(MONGODB_URL, config)

//DB Events
mongoose.connection
.on("open", () => console.log("Connected to Mongo"))
.on("close", () => console.log("Disonnected to Mongo"))
.on("error", (error) => console.log(error))

module.exports = mongoose