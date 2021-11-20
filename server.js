////
// Dependencies
////
require("dotenv").config()
const express = require ("express")
const app = express()
const { PORT, MONGODB_URL } = process.env
const cors = require("cors")
const morgan = require("morgan")
const mongoose = require("./db/db")
const AuthRouter = require("./controllers/user")
const EventRouter = require("./controllers/events")

////
// Middleware
////
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

////
// Routers
////
app.use("/auth", AuthRouter)
app.use("/", EventRouter)

////
// Listener
////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));