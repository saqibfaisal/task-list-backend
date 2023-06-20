const mongoose = require("mongoose");


const Add = new mongoose.Schema({
    text: {
        type: String,
        require: true,
    },
    priority: {
        type: String,
        require: true,
    },
    status: {
        type: String,
    },
    progress: {
        type: Number
    },
})

const AddModel = mongoose.model("add", Add)
module.exports = AddModel; 