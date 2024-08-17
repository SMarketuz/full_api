const mongoose = require('mongoose')


const sliderSchema = mongoose.Schema({
    url: String
})


const Slider = mongoose.model('Slider'  ,sliderSchema)

exports.Slider = Slider