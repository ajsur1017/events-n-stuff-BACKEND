const { Schema, model } = require("mongoose")

const userSchema = new Schema(
    {
        username: { type: String, require: true, unique: true },
        password: { type: String, required: true },
    },
    { timestamps: true }
);

const User = model("user", userSchema)

module.exports = User;