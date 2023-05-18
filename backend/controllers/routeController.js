const getAll = (req, res) => {
    res.json({
        msg: "All users"
    })
}

const getOne = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: `${id} user`
    })
}

const postNew = (req, res) => {
    const { name, age, phone } = req.body;
    res.json({
        msg: `${name} user added`
    })
}

const updateOne = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: `${id} user updated`
    })
}

const deleteOne = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: `${id} user delete`
    })
}


module.exports = { getAll, getOne, postNew, updateOne, deleteOne }