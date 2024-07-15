const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const {UserRegister} = require('../module/user_register')
const bcrypt = require('bcrypt')
const config = require('config')

router.post('/login' , async (req , res) => {
    const {username , password} = req.body

    if(!username || !password)
        return res.status(400).json({massage: "Ma'lumot to'liq emas"})

    const user = await UserRegister.findOne({username})
    if(!user)
        return res.status(400).json({massage: "Username yoki parol xato"})

    const compairePass = await bcrypt.compare(password , user.password)
    if(!compairePass)
        return res.status(400).json({massage: "Username yoki parol xato"})

    const token = jwt.sign({user: user._id} , config.get('tokenPrivedKey') , {expiresIn: '30d'})
    res.json({
        massage: "Foidalanuvchi profilga kirdi",
        token
    })
})





module.exports = router