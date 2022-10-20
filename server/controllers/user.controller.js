const { request, response } = require("express")
const { User } = require("../models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
module.exports = {
    register: (req, res) => {
        console.log("register", req.body)
        User.create(req.body)
        .then(user => {
            console.log("IM HERE")
            const userToken = jwt.sign({
                id: user._id
            }, process.env.SECRET_KEY);
     
            res.cookie("usertoken", userToken, process.env.SECRET_KEY, {
                    httpOnly: true
                })
            res.json({ msg: "success!", user: user });
        })
        .catch(err => res.json(err));
    },

    login: async(req, res) => {
        const user = await User.findOne({ username: req.body.username });
        console.log(req.body)
        if(user === null) {
            // username not found in users collection
            return res.sendStatus(401);
        }
     
        // if we made it this far, we found a user with this username address
        // let's compare the supplied password to the hashed password in the database
        const correctPassword = await bcrypt.compare(req.body.password, user.password);
     
        if(!correctPassword) {
            // password wasn't a match!
            return res.sendStatus(400);
        }
     
        // if we made it this far, the password was correct
        const userToken = jwt.sign({
            id: user._id
        }, process.env.SECRET_KEY);
     
        // note that the response object allows chained calls to cookie and json
        res
            .cookie("usertoken", userToken, process.env.SECRET_KEY, {
                httpOnly: true
            })
            .json({ msg: "success!" });
    },
    logout: (req, res) => {
        res.clearCookie('usertoken');
        res.sendStatus(200);
    },
    getLoggedUser: (req, res) => {
        const userToken = res.locals.payload;
        console.log(userToken);
        User.findOne({ _id: userToken.id }, '-password')
            .then((loggedUser) => {
                res.json(loggedUser);
            })
            .catch((err) => res.json(err));
    },
    getAllUsers: (req, res) => {
        User.find({}, '-password')
            .then((user) => res.json(user))
            .catch((err) => res.json(err));
    }
}
