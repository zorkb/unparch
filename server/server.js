const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/db.connection');
const wellRoutes = require('./routes/api/wells')


const User = require('./models/User.model');

//express app
const app = express();

//connect to mongodb
connectDB();

///middleware
app.use(cors())
app.use(express.json())
app.use('/routes/api/wells', wellRoutes)

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
    
app.get('/api/signin', async (req, res) => {
        const token = req.headers['x-acess-token']
        try {
            
            const user = await User.findOne({ email: email })

            return { status: 'ok', well: user.well }
        } catch(error) {
            console.log(error)
            res.json({ status: 'error', error: 'invalid token' })
        }
})

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));