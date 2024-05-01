



function validarFormulario(){
    let input=document.getElementsByTagName("input");
    console.log(input);
    let data={};
    for(let inp of input){
        if(inp.value==""){
         throw ({error:"Falta Llenar Campos"});
        }else{
            if(inp.name!="Generos"){
           data[inp.name]=inp.value;
           console.log(inp.value);
        }else{
            let generos=inp.value.split(",");
            data[inp.name]=generos;

        }
        }
       
    }
    console.log(data);
    axios.post('http://localhost:3000/movies', data)
   
  

}



const button= document.getElementById("botonEnviar");
button.addEventListener("click", validarFormulario);