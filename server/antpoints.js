const express = require('express')
const cors = require('cors')

module.exports = function (app) {
    app.use(cors())
    app.use(express.json())
    app.use('/api/user'  , require('../routers/user_registers'))
    app.use('/api/new-img'  , require('../routers/sliders'))
    app.use('/api/user'  , require('../routers/auth'))
    app.use('/api/product'  , require('../routers/products'))
}