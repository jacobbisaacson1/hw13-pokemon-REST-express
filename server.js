const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const pokemon = require('./models/pokemon.js')
const methodOverride = require('method-override')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride('_method'))


app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {pokemon: pokemon})
    // res.send(pokemon)
})

app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs', {pokemon: pokemon})
})


app.get('/pokemon/:id', (req, res) => {
    const pokemonIndex = pokemon[req.params.id]

    res.render('show.ejs', {pokemonIndex: pokemonIndex})
})


app.get('/pokemon/:id/edit', (req, res) => {
    //const pokemonToEdit = pokemon[req.params.id]
    res.render('edit.ejs', {
        pokemon: pokemon[req.params.id],
        index: req.params.id
    })
})


app.post('/pokemon', (req, res) => {
    const pokemonToAdd = {
        name: req.body.name,
        img: req.body.image
    }

    pokemon.push(pokemonToAdd)

    res.redirect('/pokemon')
})

app.delete('/pokemon/:id', (req, res) => {
    const indexOfPokemonToDelete = req.params.id
    const pokemonIndex = pokemon[req.params.id]
    console.log(`This is indexOfPokemonToDelete: ${indexOfPokemonToDelete}`)
    pokemon.splice(indexOfPokemonToDelete, 1)
    res.redirect('/pokemon')
})

app.put('/pokemon/:id/', (req, res) => {
    const updatedPokemon = {
        name: req.body.name,
        img: req.body.image
    }

    pokemon[req.params.id] = updatedPokemon

    res.redirect('/pokemon')
})





app.listen(3000, () => {
    console.log('Server is running on 3000')
})
