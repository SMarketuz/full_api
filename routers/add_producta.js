const express = require('express')
const router = express.Router()
const {Product} = require('../module/add_product')

router.post('/add/new' , async (req , res) => {
    const {url , title , info , price} = req.body

    const data = await Product({
        url,
        title,
        info,
        price
    })

    await data.save()

    res.json({
        status: true ,
        massage: "Mahsulot muofaqyatli qo'shildi"
    })
})


module.exports = router