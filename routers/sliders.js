const express = require('express')
const router = express.Router()
const {Slider} = require('../module/sliderImg')


router.post('/create' , async (req , res) => {
    const {url} = req.body

    const data = await Slider({
        url
    })

    await data.save()

    res.status(201).json({
        status: true,
        message: "Ma'lumot saqlandi"
    })

})

router.get('/get' , async (req,res) => {
    const data = await Slider.find()
    res.json({
        data
    })
})



module.exports = router