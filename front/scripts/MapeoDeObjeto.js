const objectToHtml=require("./ObjectToHtml");
console.log(typeof objectToHtml)

function mapeoDeObjeto(datas){
    const container=document.getElementById("tarjetas-container");
    datas.map((object)=>{
        container.appendChild(objectToHtml(object));
    })
}
module.exports=mapeoDeObjeto; 


