const mongoose = require('mongoose');
//const passportLocalMongoose = require('passport-local-mongoose');

let userScheme = new mongoose.Schema({
    firstname : String,
    lastname : String,
    email : String,
    password : String,
    dateDeNaissance: Date,
    sexe: String,
    tokens : {
        token : String,
        refreshToken : String,
        createdAt : Date
    }
});

//userScheme.plugin(passportLocalMongoose, {usernameField : 'email'});
module.exports = mongoose.model('users', userScheme);