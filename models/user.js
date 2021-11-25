const { Schema, model } = require("mongoose")

const userSchema = new Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        firstName: String,
        lastName: String,
        email: String
    },
    { timestamps: true }
);

const User = model("user", userSchema)

module.exports = User;