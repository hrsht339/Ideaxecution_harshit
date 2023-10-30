const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://harshit:sahu@cluster0.pylf6yp.mongodb.net/ideaxecution?retryWrites=true&w=majority")


module.exports = {
    connection
}