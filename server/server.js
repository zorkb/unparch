const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const WellOwner = require('./models/WellOwner.model');

//express app
const app = express();

//connect to mongodb
const dbURI = 'mongodb+srv://zbuch:Vandelay1261@cluster0.xcdqf.mongodb.net/unparch?retryWrites=true&w=majority'

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('connected to mongodb!'))
    .catch((err) => console.log(err));

//mongoose and mongo sandbox routes
app.get('/signup', (req, res) => {
    const wellOwner = new WellOwner({
        company: 'Farm Bros',
        email: 'test@test.com',
        password: 'testpw',
    });

    wellOwner.save()
        .then ((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
});

///middleware
app.use(cors())
app.use(express.json())


app.post('/api/signup', (req, res) => {
    console.log(req.body)
    res.json({ status: 'ok' })
})

app.listen(4000, () => {
    console.log('Server started on 4000')
})