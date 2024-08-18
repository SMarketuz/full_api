const express = require('express')
const router = express.Router()
const {UserRegister} = require('../module/user_register')
const bcrypt = require('bcrypt')
const auth = require('../middleware/token_check')

router.post('/new' , async (req , res) => {
    const {firstName , lastName , username, password} = req.body
    const getUser = await UserRegister.findOne({username})
    if(!firstName || !lastName || !username || !password)
        return res.status(400).json({massage: "Ma'lumot to'liq emas"})

    const solt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password , solt)
    const newUser = await UserRegister({
        firstName,
        lastName,
        username,
        password:hashPassword
    })

    if(getUser) 
        return res.status(400).json({massage: "Bunday foidalanuvchi mavjud"})

    await newUser.save()
    res.json({
        massage: "Foidalanuvchi ro'yxatdan o'tdi"
    })

})


router.get('/get-one' ,auth , async (req , res) => {
    const data = await UserRegister.findById({_id: req.user._id})

    res.send(data)
})


// router.get('/all' , async (req , res) => {
//     const allUser = await UserRegister.find()
//     res.json({massage: 'Barcha foidalanuvchilar' , data: allUser})
// })

// router.post('/delete/:id', async (req , res) => {
//     const result = await UserRegister.deleteOne({_id: req.params.id})
//     res.json({
//         status: true,
//         data: result
//     })
// } )


module.exports = router