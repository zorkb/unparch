const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

///middleware
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://')

app.post('/api/signup', (req, res) => {
    console.log(req.body)
    res.json({ status: 'ok' })
})

app.listen(4000, () => {
    console.log('Server started on 4000')
})