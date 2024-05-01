

function ReiniciarCampos(){
    let inputs= document.getElementsByTagName("input");
    console.log(inputs);
    for(let inp of inputs){
      inp.value="";

      }
}

const butto= document.getElementById("botonResetear");
butto.addEventListener("click",ReiniciarCampos);