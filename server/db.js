const mongoose = require('mongoose');
const config = require('config')

const connectServer = () => {
    mongoose.connect('mongodb+srv://mirsoonuzbsila001:u1ZlNJTxQIDIWJJs@cluster0.uattkfi.mongodb.net/api_full') 
        .then(res => {
            console.log('mongo is working');
        }).catch(err => {
            console.log('mongo has error', err);
        })
} 

module.exports =  connectServer