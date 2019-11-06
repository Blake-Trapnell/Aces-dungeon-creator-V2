const bcrypt = require('bcrypt-nodejs')
module.exports = {
    register: async (req,res) => {
        const db = req.app.get('db')
        const {username, password, email, prime, prime_time} = req.body
        const user = await db.auth.check_if_username_is_taken([username, email])
        if (user.length > 0) {
            return res.status(200).send({message: 'username & or email is in use'})
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const newUser = await db.auth.Register_user([username, email, prime, prime_time, hash])
            req.session.user = newUser[0]
            res.status(200).send({
                message: 'logged in',
                user: req.session.user,
                loggedIn: true
            })
    },
    login: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body
        const user = await db.auth.find_user([username])
        if (user.length === 0) {
            return res.status(200).send({message: 'Username not found'})
        }
        const result = bcrypt.compareSync(password, user[0].hash)
        if (result) {
            delete user[0].hash
            req.session.user = user[0]
            return res.status(200).send({message: 'Logged in', user: req.session.user, loggedIn: true})
        }
        else {
            return res.status(200).send({message: 'wrong'})
        }
    },
    applyPromo: async (req,res) => {
        const db = req.app.get('db')
        const {promocode} = req.body
        const valid = await db.auth.check_promo([promocode])
        res.status(200).send(valid)
    },
    setUser: async (req,res) => {
        const db = req.app.get('db')
        res.status(200).send(req.session.user)
    }
}