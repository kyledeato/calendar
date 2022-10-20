const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        minlength: [2, 'First name must at least be 2 characters'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [2, 'Password must be at least 2 characters long'],
    }
    // messageGroups: [{ type: mongoose.Types.ObjectId, ref: 'MessageGroup' }]
}, {timestamps:true})

UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10).then((hash) => {
        this.password = hash;
        next();
    });
});
module.exports.User = mongoose.model("User", UserSchema)