const port = 3000;
const express = require('express')
const app = express()
const pokemon = require('./models/pokemon.js')
const bodyParser = require('body-parser')



app.use(express.static('public'))


app.get("/pokemon", (req, res) => {
    res.render('index.ejs', {
        AllPokemon: pokemon,
    })

})

app.get('/pokemon/new', (req, res) => {
    res.render("new.ejs")

})

app.get("/pokemon/:id", (req, res) => {
    res.render("show.ejs", {
        thisPokemon: pokemon[req.params.id],
        indexOfPokemonToDelete: req.params.id
    })

})

app.post("/pokemon", (req, res) => {
    console.log(req.body)
    const pokemonToAdd = {
        name: req.body.name,
        img: req.body.img
    }
    pokemon.push(pokemonToAdd)
    res.redirect('/pokemon')
})


app.delete('/pokemon/:id', (req, res) => {
    const indexOfPokemonToDelete = req.params.id
    pokemon.splice(indexOfPokemonToDelete, 1)
    res.redirect('/pokemon')
})

app.get('/pokemon/:id/edit', (req, res) => {

    const pokemonToEdit = pokemon[req.params.id]
    res.render('edit.ejs', {
        pokemon: pokemonToEdit,
        indexOfPokemonToEdit: req.params.id
    })
})

app.put('/pokemon/:id', (req, res) => {
    const edittedPokemon = {
        name: req.body.name,
        img: req.body.img
    }
    pokemon[req.params.id] = edittedPokemon
    res.redirect('/pokemon')

})














app.listen(port, function() {
    console.log('pokemon running: ', port);
})