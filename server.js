const port = 3000;
const express = require('express')
const app = express()
const pokemon = require('./models/pokemon.js')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')














app.listen(port, function() {
    console.log('pokemon running: ', port);
})