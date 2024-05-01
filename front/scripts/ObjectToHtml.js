function objectToHtml({ title,year,director,duration,genre,rate,poster}){




    const div = document.createElement("div");
    const titleDOM=document.createElement("h3");
    const yearDOM=document.createElement("p");
    const directorDOM=document.createElement("p");
    const durationDOM=document.createElement("p");
    const genreDOM=document.createElement("p");
    const rateDOM=document.createElement("p");
    const posterDOM=document.createElement("img");
    
    
       
       
    
        titleDOM.innerHTML=`Titulo: ${title}`;
        
        yearDOM.innerHTML=`Año: ${year}`;
        directorDOM.innerHTML=`Director: ${director}`;
        durationDOM.innerHTML=`Duración: ${duration}`;
        genreDOM.innerHTML=`Genero: ${genre}`;
        rateDOM.innerHTML=`Genero: ${rate}`;
    
        posterDOM.src=poster;
        div.classList.add("TarjetaActividad");
        posterDOM.classList.add("ImagenTarjeta");
        // marco.src="./assets/img/marco.png";
        // marco.classList.add("marco");
    
       
        // div.appendChils(marco);
        div.appendChild(posterDOM);
        div.appendChild(titleDOM);
        div.appendChild(directorDOM);
        div.appendChild(durationDOM);
        div.appendChild(genreDOM);
       
        return div;
    
    
    }
    
module.exports=objectToHtml; 