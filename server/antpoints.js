const express = require('express')
const cors = require('cors')

module.exports = function (app) {
    app.use(cors())
    app.use(express.json())
    app.use('/api/user'  , require('../routers/user_registers'))
    app.use('/api/user'  , require('../routers/auth'))
    app.use('/api/add-product'  , require('../routers/add_producta'))
}