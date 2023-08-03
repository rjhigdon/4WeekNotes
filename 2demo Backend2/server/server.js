const express = require('express')       //accesses the express package usable in the node module
const cors = require('cors')             //accesses the cors package usable in the node module

const app = express()                   //sets up our endpoints and alows middlepoints

app.use(express.json())                 //this allows translatation of the code from axios so it is readable by node
app.use(cors())                         //invokes cors allowing for resources to be gathered from other origins

const controller = require('./controller')
const{getMovies, deleteMovie, createMovie, updateMovie} = controller

app.get('/api/movies', getMovies)                  //this is where it needs to retrieve info from and it must match the endpoint in main.js
app.delete('/api/movies/:id', deleteMovie)
app.post('/api/movies', createMovie)
app.put('/api/movies/:id', updateMovie)

app.listen(4004, () =>  console.log('Port 4004 success'))     //allows for the server to be heard. port should match the top of main.js
