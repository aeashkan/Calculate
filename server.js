const express = require('express');
const config = require('config');
const {User} = require('./model/user');

console.log(`*** ${String(config.get('Level')).toUpperCase()} ***`);
 
const newUser = new User({
    fullname: 'Ashkan Elahi',
    email: 'ashkan.elahi99@gmail.com',
    password: '848413ae'
});

newUser.save().then((user) => {
    console.log('User created', user);
    
})
