const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())
app.use(require('cors')())
app.use('/uploads', express.static(__dirname + '/uploads'))
require('./plugins/db')(app)
require('./routes/admin')(app)

app.listen(3000, () => {
    console.log('listening on 3000')
})