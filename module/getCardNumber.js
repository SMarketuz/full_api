

const mongoose = require('mongoose')

const cardNumberSchema = new mongoose.Schema({
    cardNumber: Number,
    statNumber: Number
})

 
const CardNumber = mongoose.model('CardNumber' , cardNumberSchema)

exports = CardNumber