const userModel = require('../models/user')

exports.getSignIn = (req, res) => {
    res.render("auth/signIn")
}

exports.getSignUp = (req, res) => {
    res.render("auth/signUp")
}


exports.postSignIn = () => { }

exports.postSignUp = async (req, res) => {
    try {
        const user = req.body;
        const users = await userModel.fetchAll()
        const matched = users.find(u => u.email === user.email) 
        if (matched) {
            return res.send('Email Already Exists')
        }     
        await userModel.storeAUser(user)
        res.redirect("SignIn")
    } catch (e) {
        res.send(e)
    }
}