const express = require('express')
const router = express.Router()
const {CardNumber} = require('../module/getCardNumber')

router.post('/add' , async (req , res) => {
    const {cardNumber , statNumber } = req.body

    const data = await Product({
        cardNumber,
        statNumber
    })

    await data.save()

    res.json({
        status: true ,
        massage: "Mahsulot muofaqyatli qo'shildi"
    })
})


module.exports = router