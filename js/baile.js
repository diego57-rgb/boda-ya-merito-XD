const allPetalo = document.querySelectorAll('.petalo');
const title = document.querySelector('#title');
const text = document.querySelector('#text-content');
const textos = document.querySelectorAll('.text-x');
const stickers = document.querySelectorAll('.sticker');
const stickerBox = document.querySelector('#stickers');
const allStickers = document.querySelector("#allStickers")
const allStickersA = document.getElementsByClassName("stick");

const allAudioButtons = document.getElementsByClassName("audio_b")

const audio1000 = document.getElementById("a_thounsand_miles")
const audioW = document.getElementById("wolves")
const audioCC = document.getElementById("chasing_cars")

const mousy = document.querySelector('#mousy');
const musy = document.querySelector('#musy')

const info=[
    {
        title: "¿Porque el baile?",
        text: "El baile es un momento que debe ser inolvidable para los invitados pero sobre todo para los novios"
    },
    {
        title: "¿Qué debe haber?",
        text: [
            "-  Baile padres e hijos, una conbinacion en donde ambas parejas podrán bailar un balls con la familia/papás",
            "-  Baile con los padrinos",
            "-  Bals de pareja",
            "-  Baile sorpresa"
        ]
    },
    {
        title: "¿Qué hace especial a un baile?",
        text: "Que existan cargadas a lo largo de los bailes es muy importante, además agregar el detalle de las mariposas me gustaría"
    },
    {
        title: "Música del baile",
        text: [
            "-  Chansing Cars: Snow Patrol",
            "-  A Thounsand Miles: Vanessa Carlton",
            "-  Wolves: Selena Gomez y Marshmello",
        ]
    },
    {
        title: "Tradiciones",
        text: [
            "Las tradiciones forman parte de la historia y por ello hay algunos que quisiera mantener:",
            "-  El baile de la liga",
            "-  Lanzamiento del ramo (a mí estilo)",
            "-  Brindis",
            "-  Votos privados de los novios"
        ]
    },
    {
        title: "Ambiente",
        text: "Este fue el primer baile que compartimos juntos, y fue mágico."
    }
];

for(let i = 0; i < allPetalo.length; i++){
    allPetalo[i].style.transition = `transform 3s ease-in-out 0s`;
    allPetalo[i].style.transformOrigin = `100px 0px`;
    allPetalo[i].style.transform = `rotate(${i*Math.PI/3}rad)`;
    allPetalo[i].style.left = `${Math.cos(i*Math.PI/3)*100}px`
    allPetalo[i].style.top = `${Math.sin(i*Math.PI/3)*100}px`
    console.log(allPetalo[i].style.transform);
}

function cambiarTexto(index_title, index_text){ 
    for(let i = 0; i < textos.length; i++){
        textos[i].textContent = '';
        textos[i].style.visibility = 'hidden';
        textos[i].style.position = "absolute"
    }
    if(index_text !== 1&&index_text !== 4&&index_text !== 3){
        title.textContent = info[index_title].title;
        text.textContent = info[index_title].text;
        textos[0].style.visibility = 'visible';
        textos[0].style.position = 'relative';
    }else{
        title.textContent = info[index_title].title;
        for(let i = 0; i < info[index_title].text.length; i++){
            textos[i].textContent = info[index_title].text[i];
            textos[i].style.visibility = 'visible';
            textos[i].style.position = 'relative';
        }
    } 
}
    
function stickerAction(index){
    mousy.style.display = "block"
    mousy.style.backgroundImage = `url('./stickers/st${index+1}.png')`

    musy.style.display = "block"
    musy.style.backgroundImage = `url('./stickers/st${index+1}.png')`
}

function ponerSticker(){
    console.log(screen.width, mousy.style.left)
    if(parseInt(mousy.style.left) > screen.width-100){
        mousy.style.left = `${screen.width - 100}px`;
    }
    if(parseInt(mousy.style.left) < 0){
        mousy.style.left = `${0}px`;
    }
    window.addEventListener('resize', (e) => {
        console.log(screen.width, mousy.style.left)
        if(parseInt(mousy.style.top) > screen.height-100){
            mousy.style.top = `${screen.height - 100}px`;
        }
    })


    let sticker = document.createElement('div');
    sticker.classList.add('stick');
    sticker.style.position = 'absolute';
    sticker.style.left = mousy.style.left;
    sticker.style.top = mousy.style.top;
    sticker.style.width = '100px';
    sticker.style.height = '100px';
    sticker.style.backgroundImage = mousy.style.backgroundImage;
    sticker.style.backgroundSize = 'contain';
    sticker.style.backgroundRepeat = 'no-repeat';
    sticker.style.backgroundPosition = 'center';
    allStickers.appendChild(sticker);
}

function stickerOut(){
    mousy.style.display = "none"
    musy.style.display = "none"
}

let boxyClicked = false;
function boxy(){
    if(!boxyClicked){
        stickerBox.style.display = 'block';
        boxyClicked = true;
    }else{
        stickerBox.style.display = 'none';
        boxyClicked = false;
    }
}
let audionOn = [false, false, false]
function musica(index){
    audio1000.currentTime = 0
    audioW.currentTime = 0
    audioCC.currentTime = 0
    if(!audionOn[index]){
        if(index == 0){
            audio1000.play()
            audioW.pause()
            audioCC.pause()
            allAudioButtons[0].style.backgroundImage = 'url("./assets/miles_on.png")'
            allAudioButtons[1].style.backgroundImage = 'url("./assets/chasing_pause.png")'
            allAudioButtons[2].style.backgroundImage = 'url("./assets/wolves_pause.png")'
            audionOn[0] = true
        }
        if(index == 1){
            audio1000.pause()
            audioW.pause()
            audioCC.play()
            allAudioButtons[0].style.backgroundImage = 'url("./assets/miles_pause.png")'
            allAudioButtons[1].style.backgroundImage = 'url("./assets/chasing_on.png")'
            allAudioButtons[2].style.backgroundImage = 'url("./assets/wolves_pause.png")'
            audionOn[1] = true
        }

        if(index == 2){
            audio1000.pause()
            audioW.play()
            audioCC.pause()
            allAudioButtons[0].style.backgroundImage = 'url("./assets/miles_pause.png")'
            allAudioButtons[1].style.backgroundImage = 'url("./assets/chasing_pause.png")'
            allAudioButtons[2].style.backgroundImage = 'url("./assets/wolves_on.png")'
            audionOn[2] = true
        }
    }else{
        if(index == 0){
            audio1000.pause()
            allAudioButtons[0].style.backgroundImage = 'url("./assets/miles_pause.png")'
            audionOn[0] = false
        }
        if(index == 1){
            audioCC.pause()
            allAudioButtons[1].style.backgroundImage = 'url("./assets/chasing_pause.png")'
            audionOn[1] = false
        }

        if(index == 2){
            audioW.pause()
            allAudioButtons[2].style.backgroundImage = 'url("./assets/wolves_pause.png")'
            audionOn[2] = false
        }
    }
    
}


cambiarTexto(0, 0);


document.addEventListener('mousemove', (e) => {
    mousy.style.left = `${e.pageX - 50}px`;
    mousy.style.top = `${e.pageY - 50}px`;
    window.addEventListener('resize', (e) => {
        console.log(screen.width, mousy.style.left)
        if(parseInt(mousy.style.top) > screen.height-100){
            mousy.style.top = `${screen.height - 100}px`;
        }
    })
})



let sizeW = screen.width
setInterval(()=>{
    console.log(screen.width)
    if (screen.width === sizeW){
        sizeW = screen.width
    }else{
        for(let i = 0; i < allStickersA.length; i++){
            let left = parseInt(allStickersA[i].style.left);
            allStickersA[i].style.left = (left/sizeW)*(screen.width-50) + 'px';
        }        
        sizeW = screen.width
    }
},10)
