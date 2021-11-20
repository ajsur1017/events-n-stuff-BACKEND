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

////
// Routes
////
app.get("/", (req, res) => {
    res.send("Welcome to the Event API home route")
})
// Index
app.get("/events", async (req, res) => {
    try {
        res.json(await Events.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
})
// New
app.post("/events", async (req, res) => {
    try {
        res.json(await Events.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
})
// Update
app.put("/events/:id", async (req, res) => {
    try {
        res.json(
            await Events.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {
        res.status(400).json(error);
    }
});
// Delete
app.delete("/events/:id", async (req, res) => {
    try {
        res.json(await Events.findByIdAndRemove(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
});
////
// Listener
////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));