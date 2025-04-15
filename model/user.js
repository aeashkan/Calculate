const {mongoose} = require('../db/mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 6,
        trim: true,
        validate :{
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
            
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    }

});


const User = mongoose.model('User', userSchema);

module.exports = { User };
