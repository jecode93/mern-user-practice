const User = require("../model/userModel")
const mongoose = require("mongoose");

//Get all
const getAll = async (req, res) => {
    const user = await User.find({}).sort({ createdAt: -1 })
    res.status(200).json(user)
}

//Get one
const getOne = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({
            msg: "No such data"
        })
    }
    const user = await User.findById(id)
    if (!user) {
        res.status(404).json({
            msg: `User ${id} not found`
        })
    }
    res.status(200).json(user)
}

//Create new
const postNew = async (req, res) => {
    const { name, email, profession, yearOfExperience } = req.body;
    try {
        const user = await User.create({ name, email, profession, yearOfExperience })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

//Update one
const updateOne = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({
            msg: "No such data"
        })
    }
    const user = await User.findOneAndUpdate({ _id: id }, {
        ...req.body
    })
    if (!user) {
        res.status(404).json({
            msg: `No such user ${id} found`
        })
    }
    res.status(200).json(user)
}

//Delete one
const deleteOne = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({
            msg: "No such data"
        })
    }
    const user = await User.findOneAndDelete({ _id: id })
    if (!user) {
        res.status(404).json({
            msg: `No such user ${id} found`
        })
    }
    res.status(200).json(user)
}


module.exports = { getAll, getOne, postNew, updateOne, deleteOne }