const express = require('express');
const config = require('config');

console.log(`*** ${String(config.get('Level')).toUpperCase()} ***`);
console.log(config.get('PORT'));
console.log(config.get('MONGODB_URI'));
