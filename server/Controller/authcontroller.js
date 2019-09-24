const bcrypt = require('bcrypt-nodejs')
module.exports = {
    register: async (req,res) => {
        const db = req.app.get('db')
        const {username, password, email, dungeon_master} = req.body
        const user = await db.get.check_if_username_is_taken([username, email])
        if (user.length > 0) {
            return res.status(400).send({message: 'username & or email is in use'})
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const newUser = await db.Register_user({username, email, dungeon_master, hash})
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
        const user = await db.get.check_if_username_is_taken([username])
        if (user.length === 0) {
            return res.status(400).send({message: 'Username not found'})
        }
        const result = bcrypt.compareSync(password, user[0].hash)
        if (result) {
            delete user[0].hash
            req.session.user = user[0]
            return res.status(200).send({message: 'Logged in', user: req.session.user, loggedIn: true})
        }
        else {
            return res.status(401).send({message: 'wrong password'})
        }
    },
}