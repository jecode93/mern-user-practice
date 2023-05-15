const express = require("express");
const router = express.Router();

//Get all users
router.get("/", (req, res) => {
    res.json({
        msg: "All users"
    })
})

//Get one user
router.get("/:id", (req, res) => {
    const { id } = req.params;
    res.json({
        msg: `${id} user`
    })
})

//Post user
router.post("/", (req, res) => {
    const { name, age, phone } = req.body;
    res.json({
        msg: `${name} user added`
    })
})

//Update one user
router.patch("/:id", (req, res) => {
    const { id } = req.params;
    res.json({
        msg: `${id} user updated`
    })
})

//Delete one user
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    res.json({
        msg: `${id} user delete`
    })
})

module.exports = router;