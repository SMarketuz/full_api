const express = require('express')
const router = express.Router()
const {CardNumberModel} = require('../module/getCardNumber')

router.post('/add' , async (req , res) => {
    const {cardNumber , statNumber } = req.body

    const data = await CardNumberModel({
        cardNumber,
        statNumber
    })

    await data.save()

    res.json({
        status: true ,
        massage: "Mahsulot muofaqyatli qo'shildi"
    })
})

router.get('/get' , async () => {
    const data = await CardNumberModel.find()


    res.send(data)
})

module.exports = router