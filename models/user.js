const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/rent-roomz', {useNewUrlParser: true,useUnifiedTopology: true });

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model("User",userSchema);