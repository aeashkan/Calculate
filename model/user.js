const {mongoose} = require('../db/mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const _ = require('lodash');

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

userSchema.methods.toJSON = function() {
    const user = this;
    const userObject = user.toObject();
    return _.pick(userObject, ['_id', 'fullname', 'email']);
}

userSchema.pre('save', function(next)  {
    const user = this;
    if (user.isModified('password')) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
})

const User = mongoose.model('User', userSchema);

module.exports = { User };
