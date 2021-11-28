const Events = require("../models/event")
const { Router } = require("express")
const router = Router()

////
// Routes
////
router.get("/", (req, res) => {
    res.send("Welcome to the Event API home route")
})
// Index
router.get("/events", async (req, res) => {
    try {
        res.json(await Events.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
})
// New
router.post("/events", async (req, res) => {
    try {
        res.json(await Events.create(req.body));
    } catch (error) {
        res.status(400).json({error: "its breaking"});
        console.log(error)
    }
})
// Update
router.put("/events/:id", async (req, res) => {
    try {
        res.json(
            await Events.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {
        res.status(400).json(error);
    }
});
// Delete
router.delete("/events/:id", async (req, res) => {
    try {
        res.json(await Events.findByIdAndRemove(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
});

router.get("/index.html", async (req, res) => {
    try {
        res.json(await Events.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
})

module.exports = router