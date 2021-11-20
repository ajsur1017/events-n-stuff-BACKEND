const { Schema, model } = require("mongoose")

const eventsSchema = new Schema(
    {
        username: { type: String, require: true, unique: true },
        name: String,
        date: Date,
        location: String,
        description: String,
        cost: String,
        image: String,
        user: String,
    },
    { timestamps: true }
);

const Events = mongoose.model("events", eventsSchema)

module.exports = Events;