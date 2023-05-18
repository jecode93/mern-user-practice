const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    yearOfExperience: {
        type: Number,
        required: true
    }
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel