const hombre = {
    traje:[
"- Traje blanco (de modo que el resalte)",

"- Que su vestimenta incluya texturas (encaje, diseño, etc) en al menos una de sus prendas para ir a juego",

"- Detalles en un tono dorado calido (similar al anillo)",],
    accesorios:[
"- Que use reloj para la ocasión",

"- Quiero que sus calcetas sean originales y a su gusto",

"- Su complementos de traje a juego, su pañuelo tendrá un pequeño beso mío (bordado o pintado)",

"- El elegirá cadena, pulsera etc. adicional"]
}

const mujer = {
    vestido:[
"- Vestido color blanco", 

"- El vestido debe tener mangas (preferentemente que se puedan retirar)", 

"- El vestido tambien deberá tener algún encaje o textura.", 

"- Que tenga volumen pero que pueda ser desmontable para tener un estilo más relajado en la fiesta.", 

"- Tacones que tengan un buen soporte"],
    accesorios:[
"- Peinado recogido pero despeinado a su vez",

"- El velo tendrá deatalles atrás para que al colocarse en el rostro se siga viendo decorado el peinado",

"- Accesorios con brillos y que se caracterice por flores o detalles del estilo",

"- Maquillaje alto contraste",

"- El ramo deberá tener colores llamativos"]
}

var statusButtons = {"hombre":[false, false], "mujer":[false, false]};

const botones = document.querySelectorAll("button");


botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        if (boton.id === "vestido") {
            statusChange(boton.id, statusButtons.mujer[0], "mujer", mujer.vestido, 0);
            if(statusButtons.mujer[1]){
                statusChange("accesoriosM", statusButtons.mujer[1], "mujer", mujer.accesorios, 1);
            }
        }
        if (boton.id === "accesoriosM") {
            statusChange(boton.id, statusButtons.mujer[1], "mujer", mujer.accesorios, 1);
            if(statusButtons.mujer[0]){
                statusChange("vestido", statusButtons.mujer[0], "mujer", mujer.vestido, 0);
            }
        }
        if (boton.id === "accesoriosH") {
            statusChange(boton.id, statusButtons.hombre[0], "hombre", hombre.accesorios, 0);
            if(statusButtons.hombre[1]){
                statusChange("traje", statusButtons.hombre[1], "hombre", hombre.traje, 1);
            }
        }
        if (boton.id === "traje") {
            statusChange(boton.id, statusButtons.hombre[1], "hombre", hombre.traje, 1);
            if(statusButtons.hombre[0]){
                statusChange("accesoriosH", statusButtons.hombre[0], "hombre", hombre.accesorios, 0);
            }
        }
    });
});


function statusChange(id, status, person, contenty, num){
    let infoArray =[]
    let eachText = []
    for(let i = 0; i < contenty.length; i++){
        infoArray.push(contenty[i]);
        eachText.push(document.querySelectorAll("#"+id+" p")[i]);
        console.log(eachText);
    }
    
    if(!status){        
        for(let i = 0; i < contenty.length; i++){
            eachText[i].style.position = "relative";
            eachText[i].style.borderLeft = "2px solid black";
            eachText[i].textContent = infoArray[i];
            eachText[i].style.animation = "anti-barrido 2s forwards";
        }
        document.getElementById(id).classList.add("activo");
        statusButtons[person][num] = true;
    }else{
        for(let i = 0; i < contenty.length; i++){
            eachText[i].textContent = "";
            eachText[i].style.position = "absolute";
            eachText[i].style.animation = "barrido 0s forwards";
                       
        }
        document.getElementById(id).classList.add("desactivo");
        statusButtons[person][num] = false;
    }
}