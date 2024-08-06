

const mongoose = require('mongoose')

const cardNumberSchema =  mongoose.Schema({
    cardNumber: Number,
    statNumber: Number
})

 
const CardNumberModel = mongoose.model('CardNumberModel' , cardNumberSchema)

exports.CardNumberModel = CardNumberModel