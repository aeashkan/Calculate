const express = require('express');
const config = require('config');
const _ = require('lodash');
const { User } = require('./model/user');

console.log(`*** ${String(config.get('Level')).toUpperCase()} ***`);

const app = express();

app.listen(config.get('PORT'), () => {
    console.log(`Server is running on port ${config.get('PORT')}`);
});
app.use(express.json());
app.post('/api/users', (req, res) => {
    const body = _.pick(req.body, ['fullname', 'email', 'password']);
    const user = new User(body);
    console.log(body);
    

    user.save().then((user) => {
        res.status(200).send(user);
    }).catch((err) => {
        res.status(400).send(err);
    });
});


