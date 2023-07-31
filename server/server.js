const express = require('express')
const cors = require('cors')

const app = express() //creates and express server instance

app.use(express.json()) //express handles translation to/from json
app.use(cors())//alow requests from other port #s

const inventory = ['greeting card', 'wagon', 'computer', 'table', 'chair', 'milk', 'sailboat', 'conditioner', 'rusty nail', 'desk']
// //ENDPOINTS
// app.get('/',(req, res) =>{
//     let welcome = "welcome RJ"
//     res.status(200).send(welcome)
// })
app.get('api/inventory', (req, res)=>{ //req is the inital request, the info detailing the request. Do console.log("___REQUEST___", request) to find all the meta data
    if(req.query.item) {
        const filteredItems = inventory.filter((product) =>{
            return product.toLocaleLowerCase().includes(req.query.item.toLocaleLowerCase())
        })
        res.status(200).send(filteredItems)
    } else{
        res.status(200).send(inventory)
    }
    res.status(200).send(inventory)
})
app.get('/api/inventory/:index', (req, res) => {
    console.log(req.params)
    let item = inventory[req.params.index]
    res.status(200).send(item)
})


app.listen(5500,)