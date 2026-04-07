const bolsa = document.getElementById("bolsa");
const audio = document.getElementById("audio");
const bien = document.getElementById("bien");
let etapa = 0;
let imagen = 1;

const textos = 
[["Ambiente", "Adornos sencillo", "./despedida-assets/deco.png"], 
["Pastel", "Inspirado en anime", "./despedida-assets/pastel.png"], 
["Decoración", "Con más cosillas de anime", "./despedida-assets/bolsita.png"], 
["Extra", "¡Y más cosillas de anime :)!", "./despedida-assets/pika.png"]]

function romperBolsa(){
    audio.pause();
    audio.currentTime = 0;
    bien.pause();
    bien.currentTime = 0;

    if(etapa === 3){
        mostrarImagenes()
        bolsa.style.rotate = "0deg";
        bolsa.style.scale = "1";
    }
    if(etapa === 2){
        bolsa.style.rotate = "10deg";
        bolsa.style.scale = "1.2";
        bolsa.style.transition = "all 0.2s ease-in-out";
    }
    if(etapa === 1){
        bolsa.style.rotate = "-20deg";
        bolsa.style.scale = "1";
        bolsa.style.transition = "all 0.2s ease-in-out";
    }
    if(etapa === 0){
        bolsa.style.rotate = "30deg";
        bolsa.style.scale = "1.2";
        bolsa.style.transition = "all 0.2s ease-in-out";
    }
    etapa +=1;
    if(window.navigator.vibrate){
        window.navigator.vibrate([500, 100, 500]);
    }
    



    audio.play()
}

function mostrarImagenes(){
    Swal.fire({
        title: textos[imagen-1][0],
        text: textos[imagen-1][1],
        imageUrl: textos[imagen-1][2],
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Despedida de soltera',
        padding: "2em",
        background: "rgb(69, 69, 69)",
        backdrop: "rgba(6, 6, 6, 0.6)",
        timer: 4000,
        showConfirmButton: true,
        confirmButtonColor: "black",
        customClass:{
            popup: "mi-fuente"
        },
    })
    imagen +=1
    etapa = -1;

    audio.pause();
    audio.currentTime = 0;
    bien.pause();
    bien.currentTime = 0;

    bien.play()

    if(imagen === 5){
        imagen = 1;
    }
    bolsa.style.backgroundImage = "url('./despedida-assets/bolsa" + imagen + ".png')";

}
