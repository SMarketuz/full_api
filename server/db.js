const mongoose = require('mongoose');
const config = require('config')

const connectServer = () => {
    mongoose.connect('mongodb+srv://modevco:modevco@cluster0.w3kmh.mongodb.net/hackaton') 
        .then(res => {
            console.log('mongo is working');
        }).catch(err => {
            console.log('mongo has error', err);
        })
} 

module.exports =  connectServer