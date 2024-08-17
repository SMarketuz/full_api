const mongoose = require('mongoose')

const userRsgisterSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
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