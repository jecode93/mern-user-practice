require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose")

app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//Route
app.get("/", (req, res) => {
    res.json({
        msg: "App running"
    })
})

//DB connection
mongoose.connect(process.env.DB)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`App running on port ${process.env.PORT}`);
        })
    })
    .catch((error) => {
        console.log(error);
    })

