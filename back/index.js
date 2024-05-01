const app= require("./src/server.js");
const dbCon= require("./src/config/dbCon.js");

dbCon().then((res)=>{
    app.listen(3000,()=>console.log("servidor escuchando en el puerto 3000"));

}).catch((error)=>{
    console.log(error)
});





