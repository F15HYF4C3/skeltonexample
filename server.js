const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const axios = require("axios");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

let todos = ["Teach React", "Teach Express", "Teach React Router"]

app.get('/api/test', (req, res, next)=>{
    axios.get('https://pokeapi.co/api/v2/pokemon/1')
        .then((pokemonResonse)=>{
            res.send(pokemonResonse.data)
        })
        
})

app.get('/api/todos', (req,res,next) => {
    res.send(todos)
})

app.delete('/api/todos', (req,res,next) => {
    todos = todos.filter((e, i)=>{
        return Number(req.query.index) !== i
    })
    res.send(todos)
})

const port = process.env.PORT || 8060;
app.listen(port, ()=>{
    console.log(`running on port ${port}`)
})