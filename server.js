const port = 3000;
const express = require('express')
const app = express()
const pokemon = require('./models/pokemon.js')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')


app.use(express.static('public'))

app.use(methodOverride('_method'))

app.get('/pokemon/new', (req, res) => {
    res.render("new.ejs")
})
















app.listen(port, function() {
    console.log('pokemon running: ', port);
})