const express = require("express");
const { getAll, getOne, postNew, updateOne, deleteOne } = require("../controllers/routeController");
const router = express.Router();

//Get all users
router.get("/", getAll)

//Get one user
router.get("/:id", getOne)

//Post user
router.post("/", postNew)

//Update one user
router.patch("/:id", updateOne)

//Delete one user
router.delete("/:id", deleteOne)

module.exports = router;