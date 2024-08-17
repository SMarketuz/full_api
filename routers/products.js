const express = require('express')
const router = express.Router()
const {Product} = require('../module/product')
const auth = require('../middleware/token_check')


router.post('/create' ,auth , async (req , res) => {
    const {name , url , info , seil , oldPrice , newPrice} = req.body
    if(!name || !url || !info || !seil || !oldPrice || !newPrice) 
        return res.status(400).json({
            status: false,
            message: "Ma'lumot to'liq emas"
        })

    const data = await Product({
        name,
        url,
        info,
        seil,
        oldPrice,
        newPrice,
        userId: req.user

    })
    
    await data.save()

    res.status(201).json({
        status: true,
        message: "Ma'lumot saqlandi"
    })

})


router.get('/get' , async (req , res) => {
    const data = await Product.find()
    .populate('userId' , '-password')
    res.json({
        status: true,
        data
    })
})



module.exports = router