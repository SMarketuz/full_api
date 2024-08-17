const mongoose = require('mongoose')


const productSchem = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    info: {
        type: String,
        required: true
    },
    seil: {
        type: Number,
        required: true
    },
    oldPrice: {
        type: Number,
        required: true
    } ,
    newPrice: {
        type: Number,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserRegister',
        required: true
    }
})


const Product = mongoose.model('Product'  ,productSchem)

exports.Product = Product