const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
    res.send('bonjour')
})

app.listen(4000, () => {
    console.log('Server started on 4000')
})