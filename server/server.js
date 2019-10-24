require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const aCtrl = require('./Controller/authcontroller')
const sCtrl = require('./Controller/sheetscontroller')
const{SERVER_PORT, CONNECTION_STRING, SECRET} = process.env
const PORT = SERVER_PORT || 4311
const app = express()

app.use(express.json())
    app.use(session({
        secret: SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 *60 * 24
        }
    }))

//Authentication
app.post('/auth/users/login', aCtrl.login)
app.post('/auth/users/register', aCtrl.register)
app.post('/auth/promo', aCtrl.applyPromo)

//sheets
app.get('/api/names', sCtrl.randomName)
app.get('/api/backgroundskills/:background', sCtrl.backgroundSkills)
app.post('/api/racialtraits', sCtrl.racialTraits)

massive(CONNECTION_STRING).then(db => {
    app.set('db',db)
    app.listen(PORT, ()=> console.log(`^.^ welcome to ${PORT}`))
}).catch(error => console.log('error connection to DB', error))