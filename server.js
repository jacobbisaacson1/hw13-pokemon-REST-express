

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const methodOverride = require("method-override")
const pokemon = require('./models/pokemon.js')


//midware
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.use ((req, res, next) => {
  console.log("running through middleware")
  next()
}) 

// get

app.get('/', (req, res) => {
    res.render('index.ejs', {
        pokemon: pokemon
    })
})



// app.get("/pokemon/:id", (req, res) => {
//     res.render("show.ejs", {
//         thisPokemon: pokemon[req.params.id],
//         indexOfPokemonToDelete: req.params.id
//     })

// })

// app.post("/pokemon", (req, res) => {
//     console.log(req.body)
//     const pokemonToAdd = {
//         name: req.body.name,
//         img: req.body.img
//     }
//     pokemon.push(pokemonToAdd)
//     res.redirect('/pokemon')
// })


// app.delete('/pokemon/:id', (req, res) => {
//     const indexOfPokemonToDelete = req.params.id
//     pokemon.splice(indexOfPokemonToDelete, 1)
//     res.redirect('/pokemon')
// })

// app.get('/pokemon/:id/edit', (req, res) => {

//     const pokemonToEdit = pokemon[req.params.id]
//     res.render('edit.ejs', {
//         pokemon: pokemonToEdit,
//         indexOfPokemonToEdit: req.params.id
//     })
// })

// app.put('/pokemon/:id', (req, res) => {
//     const edittedPokemon = {
//         name: req.body.name,
//         img: req.body.img
//     }
//     pokemon[req.params.id] = edittedPokemon
//     res.redirect('/pokemon')

// })














app.listen(3000, () => {
    console.log("Server running on port 3000")
})

