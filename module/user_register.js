const mongoose = require('mongoose')


const userRsgisterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
    
})


const UserRegister = mongoose.model('UserRegister' , userRsgisterSchema)

exports.UserRegister = UserRegister