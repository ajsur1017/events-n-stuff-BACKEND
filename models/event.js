const { Schema, model } = require("mongoose")

const eventsSchema = new Schema(
    {
        organizer: String,
        name: String,
        date: Date,
        location: String,
        description: String,
        cost: String,
        image: String,
        attendees: Array,
    },
    { timestamps: true }
);

const Events = model("events", eventsSchema)

module.exports = Events;
