const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const User = require('./models/User.model');

//express app
const app = express();

//connect to mongodb
const dbURI = 'mongodb+srv://zbuch:Vandelay1261@cluster0.xcdqf.mongodb.net/unparch?retryWrites=true&w=majority'

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('connected to mongodb!'))
    .catch((err) => console.log(err));

//mongoose and mongo sandbox routes
// app.get('/signup', (req, res) => {
//     const wellOwner = new WellOwner({
//         company: 'Farm Bros',
//         email: 'test@test.com',
//         password: 'testpw',
//     });

//     wellOwner.save()
//         .then ((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

///middleware
app.use(cors())
app.use(express.json())


app.post('/api/signup', async (req, res) => {
    console.log(req.body)
    try {
        await User.create({
            company: req.body.company,
            email: req.body.email,
            password: req.body.password,
        })
        res.json({ status: 'ok' })
    } catch (err) {
        console.log(err)
        res.json({ status: 'error', error: 'Duplicate email' })
    }
})
    
app.post('/api/login', async (req, res) => {
        await User.findOne({
            email: req.body.email,
            password: req.body.password,
        })

        if (user) {
            return res.json({ status: 'ok', user: true })
        } else {
            return res.json({ status: 'error', user: false })
        }

})

app.listen(4000, () => {
    console.log('Server started on 4000')
})