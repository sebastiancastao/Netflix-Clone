const MovieServices= require("../services/MovieServices.js");
async function  moviecontroller(req,res){
    try{
   
     const movies = await MovieServices.getMovies();
     
     res.status(200).json(movies);
     
    }catch(error){
     res.status(500).json({error: "Error Interno del Servidor"});

    }
}
async function creationController(req,res){
    let {Titulo,Año,Director,Duracion,Generos,Puntuacion,Poster}=await req.body;
    
    try{
    MovieServices.createMovies({Titulo,Año,Director,Duracion,Generos,Puntuacion,Poster});
    res.status(201).json({mensaje:"La pelicula fue añadida Existosamente"});
    }
    catch(error){
    res.status(500).json({mensaje:"La pelicula no pude ser añadida"});
    }



}
    


    




module.exports={
    moviecontroller,
    creationController,
}