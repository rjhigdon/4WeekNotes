const movies = require ('./db.json')
globalID = 11; 

module.exports = {
    getMovies: (req, res) =>{
        res.status(200).send(movies)
    },
    deleteMovie: (req,res) =>{
         let index = movies.findIndex((elem)=> elem.id === +req.params.id) 
         /*this elem is equal to a property in the movies array*/
         movies.splice(index, 1)
         res.status(200).send(movies)
     },
    createMovie: (req, res) => {
        const {title, rating, imageURL} = req.body;
        let newMovie = {       
            //right side needs to match front end; left side json
            id: globalID,
            title,  //same as title: title,
            rating: +rating,
            imageURL       //same as imageURL: imageURL
        }
        movies.push(newMovie)
        globalID++  //this increments the global ID for the next item we input
        res.status(200).send(movies)
    },
    updateMovie: (req, res) => {
        const {type} = req.body;
        let index = movies.findIndex((elem) => elem.id === +req.params.id)
        if(type === 'minus' && movies[index].rating > 1){
            movies[index].rating -= 1;
            res.status(200).send(movies)
        } else if(type === 'plus' && movies[index].rating < 5){
            movies[index].rating += 1;
            res.status(200).send(movies)
        }else{
            res.status(400).send('Invalid star rating!')
        }
    }
}
