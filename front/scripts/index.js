
const mapeoDeObjeto = require("./MapeoDeObjeto");
const axios=require("axios");












async function getMovies(){
    try{
    const {data}=await axios.get("http://localhost:3000/");
    console.log(data);
   
    mapeoDeObjeto(data);
    
   
    }catch(err){
    console.log(err.message);
    }
  
}

document.addEventListener('DOMContentLoaded',getMovies);



array=[0,1
]

function fibbonaci(){
    for(let i=0; i<array.length;i++){
        let suma=array[i]+array[i+1];
        
        if(suma>100){
            break;
        }
        array.push(array);
    }
    
}
