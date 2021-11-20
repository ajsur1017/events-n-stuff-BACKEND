////
// Dependencies
////
require("dotenv").config()
const { PORT, MONGODB_URL } = process.env
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const morgan = require("morgan")

////
// Connection
////
mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
// Connection Events
mongoose.connection
.on("open", () => console.log("Connected to Mongo"))
.on("close", () => console.log("Disonnected to Mongo"))
.on("error", (error) => console.log(error))

////
// Models
////
const EventsSchema = new mongoose.Schema({
    name: String,
    date: Date,
    startTime: String,
    endTime: String,
    location: String,
    description: String,
    cost: String,
    image: String,
    user: String,
})
const Events = mongoose.model("Events", EventsSchema)

////
// Middleware
////
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

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