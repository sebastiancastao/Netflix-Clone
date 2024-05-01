const Movie=require("../models/Movie");


async function getMovies(){
    const movies = await Movie.find();
    return movies;

}
async function createMovies({Titulo,Año,Director,Duracion,Generos,Puntuacion,Poster}){
  
    await Movie.create({title:Titulo,year:Año,director:Director,duration:Duracion,genre:Generos,rate:Puntuacion,poster:Poster});
}

module.exports={
   getMovies,
   createMovies,
   


}