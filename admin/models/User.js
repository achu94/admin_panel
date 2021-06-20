const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../../config/config');

const userScheme = new mongoose.Schema({
    password : {
        type: String,
        required : true,
        trim: true
    },
    eMail : {
        type: String,
        trim: true,
        lowercase: true,
        index : true,
        unique : true,
    },
});

userScheme.pre('save', function (next) {
    bcrypt.genSalt(SALT_ROUNDS)
        .then(salt => bcrypt.hash(this.password, salt))
        .then(hash => {
            this.password = hash;
            next();
        });
});

module.exports = mongoose.model('User', userScheme);