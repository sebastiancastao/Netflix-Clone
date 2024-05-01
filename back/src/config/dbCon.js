const mongoose= require("mongoose");


const  dbCon=async()=>{
await mongoose.connect("mongodb+srv://sebastiancastao379:Londonen8%40@prueba.3rgu6yj.mongodb.net/Movie?retryWrites=true&w=majority&appName=prueba");
}

module.exports=dbCon;